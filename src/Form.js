import React, { Component } from 'react'
import Organisms from './Organisms'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      angle: props.rule.angle,
      step: props.rule.step,
      axiom: props.rule.axiom,
      prevReplacements: "",
      replacements: props.rule.replacements,
      loops: props.rule.loops,
      startX: props.rule.startX,
      startY: props.rule.startY,
      fColor: props.rule.fColor,
      gColor: props.rule.gColor,
      bangColor: props.rule.bangColor,
      wrongStepChance: props.rule.wrongStepChance,
      wrongTurnChance: props.rule.wrongTurnChance,
      wrongAngleChance: props.rule.wrongAngleChance,
      addGrowSteps: props.rule.addGrowSteps,
    }

    this.state = this.initialState;
  }
  
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value,
    })
  }
  
  fillRules = newRule => {
    this.setState(
      newRule
    , () => this.submitForm());
  }
  
  submitForm = () => {
    // Always force a refresh when submitting the form
    this.setState({
      randomNumberForFormSubmittal: Math.random(),
    }, () => this.props.handleSubmit(this.state, "false"));
  }
  
  mutate = () => {
    // Get the current rules and add/delete a random letter/symbol
    const replacements = this.state.replacements;
    const replacementArray = replacements.split(',');
    const coinFlip = Math.floor(Math.random() * 2);
    // Which rule do we change (if there are multiples)?
    const ruleToChange = Math.floor(Math.random() * (replacementArray.length));
      
    // What are the valid characters we can add?
    // Any of the generic ones, plus any of the characters
    // we have expansion rules for. (Anything we don't have
    // an expansion rule for would be a no-op.)      
    var validCharacters = [ "+", "-", "!", "F", "G" ];
    
    // Result of the change
    var newReplacements = "";
    
    for (const rule of replacementArray) {
      const validChar = rule.split('=')[0].replace(/\(/,"").trim().split("");
      validCharacters = validCharacters.concat(validChar); 
    }
    
    // Uninquify the valid characters (just in case)
    validCharacters = validCharacters.filter((item, pos) => validCharacters.indexOf(item) === pos);
    

    // Add or delete?
    if (coinFlip === 0) {
      // It's an add!
      // Which character should we add?
      const charToAdd = validCharacters[Math.floor(Math.random() * (validCharacters.length))]; 
      
      // Finally, parse the replacements and add this new character somewhere in the appropriate rule
      for (var i=0; i < replacementArray.length; i++) {
        if (i === ruleToChange) {
          const rule = replacementArray[i].split('=');
          const subst = {findString: rule[0].replace(/\(/,"").trim(), newString: rule[1].replace(/\)/,"").trim()};
          
          const posToAdd = Math.floor(Math.random() * (subst.newString.length + 1));
          console.log("Adding '" + charToAdd + "' at " + posToAdd + " in rule " + ruleToChange);
          newReplacements += "(" + subst.findString + " = " + subst.newString.substr(0, posToAdd) + charToAdd + subst.newString.substr(posToAdd) + "), ";
        } else {
          newReplacements += replacementArray[i] + ", ";
        }
      }

    } else {
      // Delete!
      // First try deleting from the rule we chose earlier
      var deletionResult = this.deleteFromRule(replacementArray, ruleToChange, validCharacters);
      if (! deletionResult.found) {
        // if there's nothing left in there to delete, delete from any rule
        for (var ruleIndex=0; ruleIndex < replacementArray.length; ruleIndex++) {
          deletionResult = this.deleteFromRule(replacementArray, ruleIndex, validCharacters);
          if (deletionResult.found) break;
        }
      }
      newReplacements = deletionResult.newReplacements;
    }
    
    // newReplacements now has a trailing ", " because of the way we built up the
    // string -- get rid of it.
    newReplacements = newReplacements.slice(0, -2);
    
    // Always force a refresh when submitting the form
    this.setState({
      prevReplacements: replacements,
      replacements: newReplacements,
      addGrowSteps: false,
      randomNumberForFormSubmittal: Math.random(),
    }, () => this.props.handleSubmit(this.state, "false"));
  }
  
  // Deletes a random character from the specified rule in the array,
  // if that character is one of the "valid" characters
  deleteFromRule(replacementArray, ruleToChange, validCharacters) {
    var newReplacements = "";
    for (var j=0; j < replacementArray.length; j++) {
        
      if (j === ruleToChange) {
        const rule = replacementArray[j].split('=');
        const subst = {findString: rule[0].replace(/\(/,"").trim(), newString: rule[1].replace(/\)/,"").trim()};
        const posToDelete = Math.floor(Math.random() * (subst.newString.length + 1));
        var found = false;
        
        const result = this.deleteStartingAt(posToDelete, subst, newReplacements, validCharacters, ruleToChange);
        newReplacements = result.newReplacements;
        found = result.found;
        
        if (! found) {
          // just delete the first one we find
          const result = this.deleteStartingAt(0, subst, newReplacements, validCharacters, ruleToChange);
          newReplacements = result.newReplacements;
          found = result.found;
        }
        
        if (! found) {
          // I give up! This almost certainly means we're just out of stuff to delete.
          newReplacements += replacementArray[j].trim() + ", ";
        }
        
      } else {
        newReplacements += replacementArray[j].trim() + ", ";
      }
    }
    return {newReplacements: newReplacements, found: found};
  }
  
  // Deletes the character at posToDelete, unless it's not a valid
  // character, in which case it deletes the next one it finds
  deleteStartingAt(posToDelete, subst, newReplacements, validCharacters, ruleToChange) {
    var found = false;
    for (var k=posToDelete; k < subst.newString.length; k++) {
      if (validCharacters.indexOf(subst.newString.charAt(k)) > -1) {
        console.log("Deleting '" + subst.newString.charAt(k) + "' at " + k + " in rule " + ruleToChange);
        newReplacements += "(" + subst.findString + " = " + subst.newString.substr(0, k) + subst.newString.substr(k+1) + "), ";
        found = true;
        break;
      } 
    }
    return {newReplacements: newReplacements, found: found};
  }
  
  
  revert = () => {
    const prevReplacements = this.state.prevReplacements;
    const replacements = this.state.replacements;
    // Always force a refresh when submitting the form
    this.setState({
      replacements: prevReplacements,
      prevReplacements: replacements,
      addGrowSteps: false,
      randomNumberForFormSubmittal: Math.random(),
    }, () => this.props.handleSubmit(this.state, "false"));
  }
  
  getLink = () => {
    const { angle,
      step,
      axiom,
      prevReplacements,
      replacements,
      loops,
      startX,
      startY,
      fColor,
      gColor,
      bangColor,
      wrongStepChance,
      wrongTurnChance,
      wrongAngleChance,
      addGrowSteps } = this.state;
    const link = window.location.origin + "/reactive-garden/?" + 
       "angle=" + encodeURIComponent(angle) + "&" +
       "step=" + encodeURIComponent(step) + "&" +
       "axiom=" + encodeURIComponent(axiom) + "&" +
       "replacements=" + encodeURIComponent(replacements) + "&" +
       "loops=" + encodeURIComponent(loops) + "&" +
       "startX=" + encodeURIComponent(startX) + "&" +
       "startY=" + encodeURIComponent(startY) + "&" +
       "fColor=" + encodeURIComponent(fColor) + "&" +
       "gColor=" + encodeURIComponent(gColor) + "&" +
       "bangColor=" + encodeURIComponent(bangColor);
       
    console.log(wrongStepChance);
    console.log(wrongTurnChance);
    console.log(wrongAngleChance);
    console.log(addGrowSteps);
    console.log(prevReplacements);
    
    console.log(link);
        
    const el = document.createElement('textarea');
    el.value = link;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  }

  render() {
    const { angle,
      step,
      axiom,
      prevReplacements,
      replacements,
      loops,
      startX,
      startY,
      fColor,
      gColor,
      bangColor,
      wrongStepChance,
      wrongTurnChance,
      wrongAngleChance,
      addGrowSteps } = this.state;
    const self = this;
    
    return (
      
    <div>
    
      <div className="examples">
        <h3>Examples</h3>
        <p>Click on the name to try it out! Rules will be 
        auto-populated in the form to the right.</p>
        <ul className="columns">
        
          {Organisms.toArray().map(function(key, i) {
            return <li key={i}>
                   <button onClick={() => self.fillRules({
                      axiom: key[1]['rules']['axiom'],
                      prevReplacements: "",
                      replacements: key[1]['rules']['replacements'],
                      angle: key[1]['rules']['angle'],
                      step: key[1]['rules']['step'],
                      loops: key[1]['rules']['loops'],
                      startX: key[1]['rules']['startX'],
                      startY: key[1]['rules']['startY'],
                      fColor: key[1]['rules']['fColor'],
                      gColor: key[1]['rules']['gColor'],
                      bangColor: key[1]['rules']['bangColor'],
                      wrongStepChance: '0.00',
                      wrongAngleChance: '0.00',
                      wrongTurnChance: '0.00',
                      addGrowSteps: true,
                    })}>
                  <strong>{key[0]}</strong>
                  </button>
                  </li>
            })} 
        </ul>
      </div>
      
      <div className="instructions">
        <h3>L-system rules</h3>
        <form>
          <label>Axiom (initial string)</label>
          <input
            type="text"
            name="axiom"
            size="10"
            value={axiom}
            onChange={this.handleChange} />
          
          <ShowPreviousRules prevRules={prevReplacements} onClick={this.revert} />
          
          <br />
          <label>Replacement Rules</label>
          <input
            type="text"
            name="replacements"
            size="50"
            value={replacements}
            onChange={this.handleChange} />
          
          <br />
          <label>Angle for Turns</label>
          <input
            type="text"
            name="angle"
            size="5"
            value={angle}
            onChange={this.handleChange} />
          <br />
          <label>Step Size (length of line)</label>
          <input
            type="text"
            name="step"
            size="5"
            value={step}
            onChange={this.handleChange} />
          <br />
          <label>Loops (number of recursions)</label>
          <input
            type="text"
            name="loops"
            size="5"
            value={loops}
            onChange={this.handleChange} />
          <br />
          <label>Initial X Position</label>
          <input
            type="text"
            name="startX"
            size="5"
            value={startX}
            onChange={this.handleChange} />
          <label>Initial Y Position</label>
          <input
            type="text"
            name="startY"
            size="5"
            value={startY}
            onChange={this.handleChange} />
          <br />
          <label>'F' Color</label>
          <input
            type="text"
            name="fColor"
            size="8"
            value={fColor}
            onChange={this.handleChange} />
          <label>'G' Color</label>
          <input
            type="text"
            name="gColor"
            size="8"
            value={gColor}
            onChange={this.handleChange} />
          <label>'!' Color</label>
          <input
            type="text"
            name="bangColor"
            size="8"
            value={bangColor}
            onChange={this.handleChange} />
          <br />
          
          
          <label>Draw growth steps</label>
          <input
            type="checkbox"
            name="addGrowSteps"
            checked={addGrowSteps}
            onChange={this.handleChange} />
          
          <br /><br />
          <strong>Buy the turtle a drink!</strong>
          <br />
          Enter the following probabilities in decimal (e.g. 0.25 == 25% chance)
          <br />
          <input
            type="text"
            name="wrongStepChance"
            size="8"
            value={wrongStepChance}
            onChange={this.handleChange} />
          <label>Probability that a step will be somewhat longer or shorter</label>
          <br />
          <input
            type="text"
            name="wrongTurnChance"
            size="8"
            value={wrongTurnChance}
            onChange={this.handleChange} />
          <label>Probability of turning in the wrong direction</label>
          <br />
          <input
            type="text"
            name="wrongAngleChance"
            size="8"
            value={wrongAngleChance}
            onChange={this.handleChange} />
          <label>Probability that a turn angle will be somewhat narrower or wider</label>
          <br />
          <input type="button" value="Submit" onClick={this.submitForm} />
          <input type="button" value="Mutate" onClick={this.mutate} />
          <input type="button" value="Get Link" onClick={this.getLink} />
            
        </form>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        To run an L-system, enter the required information and press "submit". Some notes:
        <ul>
        <li>The "Replacement Rule" should consist one or more comma-separated replacement rules, of the format "( X = Y )" -- see examples, below</li>
        <li>The rules use the following symbols:
          <ul>
          <li>'F' and 'G' each draw a single line segment</li>
          <li>'+' and '-' rotate the turtle to the left and right respectively (by the defined angle)</li>
          <li>'[' and ']' store and recall a particular XY coordinate for the turtle (i.e. allow the turtle to teleport back to a previous location)</li>
          <li>'!' will draw a line segment that is larger if it's older, by a factor of how many generations old it is. In other words, 
            a '!' that is added to the output string in the first loop will be 6 times longer than a '!' that's added to the 
            output string in the sixth loop.</li> 
          <li>'X', 'Y', and all other characters are no-ops and are used as placeholders in the rules for more complicated expansions 
            (see "Christmas Tree" for an example)</li>
          </ul>
        </li>
        <li>Don't use too many recursions, or the JavaScript will freak out. Limiting to 6 loops is a good rule of thumb.</li>
        <li>If you're having trouble seeing the entire resulting drawing, try reducing the "Step Size" to make it smaller</li>
        <li>You can also use the "F Color", "G Color" and "'!' Color" fields to set colors for the various letters. If using hex colors,
          please include the "#" at the beginning! (Set these to the string 'random' if you want it to just
          choose some random colors from the blue-green spectrum for each line.)</li>
        <li>NOTE: INPUTS ARE NOT CURRENTLY BEING SANITIZED! If you get an error, probably it's a parsing issue. Check your rules in particular.</li>
        </ul>
      </div>
      
      
    </div>
    );
  }
}

function ShowPreviousRules(params) {

  if (params.prevRules !== "") {
    return (
    <span>
      <br />
      <input className="noIndent" type="button" value="Revert to Previous" onClick={params.onClick} />
      <input
        type="text"
        name="prevReplacements"
        size="50"
        value={params.prevRules}
        disabled={true} />
      
    </span>
    );
  }
  return <span />;
}


export default Form;