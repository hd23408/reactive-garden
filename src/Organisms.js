import Immutable from 'immutable'

// A dictionary of organisms. Note
// that these don't have default X and Y
// values set, so you're probably going to 
// want to do something like this:
// 
// myOrganism = Object.assign({}, Organisms.get("algae").rules, {startX: '60', startY: '120'}) 
const Organisms = Immutable.OrderedMap(
    ).set("Sierpinski Triangle",
      {
        rules: {
          angle: '120',
          step: '7',
          axiom: 'F-G-G',
          replacements: '(F = F-G+F+G-F), (G = GG)',
          loops: '6',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "150",
          startY: "500",
          gardenStep: '6',
          gardenLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Koch Curve",
      {
        rules: {
          angle: '90',
          step: '6',
          axiom: '-F',
          replacements:'(F = F+F-F-F+F)',
          loops: '4',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "50",
          startY: "500",
          gardenStep: '3',
          gardenLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
     ).set("Kolam",
      {
        rules: {
          angle: "15",
          step: "10",
          axiom: "GGGG",
          replacements: "(G = X+X+X+X+X+X+), (X = [F+F+F+F[---X-Y]+++++F++++++++F-F-F-F]), (Y = [F+F+F+F[---Y]+++++F++++++++F-F-F-F])",
          loops: '5',
          fColor: '#ff944d',
          gColor: '#00ace6',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "300",
          gardenStep: '5',
          gardenLoops: '2',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Dragon Curve",
      {
        rules: {
          angle: '90',
          step: '4',
          axiom: 'FX',
          replacements: '(X = X+YG+), (Y = -FX-Y), (G = F)',
          loops: '12',
          fColor: '#ac3939',
          gColor: '#e60000',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "300",
          gardenStep: '3',
          gardenLoops: '6',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Anklets of Krishna",
      {
        rules: {
          angle: '90',
          step: '4',
          axiom: 'F+XF+F+XF',
          replacements: '(X = XF-F-F+XF+F+XF-F-F+X)',
          loops: '5',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "400",
          startY: "400",
          gardenStep: '3',
          gardenLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Gosper Curve",
      {
        rules: {
          angle: '60',
          step: '9',
          axiom: 'F',
          replacements: '(F=F+G++G-F--FF-G+), (G=-F+GG++G+F--F-G)',
          loops: '4',
          fColor: '#996600',
          gColor: '#ffaa80',
          bangColor: '#996600',
          startX: "550",
          startY: "250",
          gardenStep: '3',
          gardenLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
      
    ).set("Binary Tree",
      {
        rules: {
          angle: '25',
          step: '4',
          axiom: 'F',
          replacements: '(G = GG), (F = G[+F]-F)',
          loops: '7',
          fColor: '#ff3399',
          gColor: '#336600',
          bangColor: '#336600',
          startX: "300",
          startY: "600",
          gardenStep: '2',
          gardenLoops: '5',
          wrongStepChance: '0.25',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.25',
        }
      }
    ).set("Dandelion",
      {
        rules: {
          angle: '60',
          step: '12',
          axiom: '!X!!FF',
          replacements: '(F=F[-F][+F][F]), (X=[+G[-G[+G]][-G[+G]]!]Y[-G[+G]!]), (Y=GGG)',
          loops: '5',
          fColor: '#e6e600',
          gColor: '#004d00',
          bangColor: '#004d00',
          startX: "300",
          startY: "600",
          gardenStep: '3',
          gardenLoops: '4',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.10',
          wrongAngleChance: '0.05',
        }
      }
    ).set("Feather Tree",
      {
        rules: {
          angle: '25',
          step: '10',
          axiom: '!!FF',
          replacements: '(F=F[-F][+F[+F]]![+F][-F[-F]])',
          loops: '4',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: '#008000',
          startX: "300",
          startY: "600",
          gardenStep: '3',
          gardenLoops: '3',
          wrongStepChance: '0.30',
          wrongTurnChance: '0.05',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Algae",
      {
        rules: {
          angle: '20',
          step: '15',
          axiom: 'F',
          replacements: '(F = F[+F]F[-F]F)',
          loops: '3',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "600",
          gardenStep: '3',
          gardenLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.75',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Berry Bush",
      {
        rules: {
          angle: '25',
          step: '4',
          axiom: 'F',
          replacements: '(F = G[+F][-F]GF), (G = GG)',
          loops: '6',
          fColor: '#bf00ff',
          gColor: '#336600',
          bangColor: '#009973',
          startX: "300",
          startY: "600",
          gardenStep: '3',
          gardenLoops: '4',
          wrongStepChance: '0.50',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.50',
        }
      }
    ).set("Little Bush",
      {
        rules: {
          angle: '23',
          step: '20',
          axiom: 'X',
          replacements: '(X = F-[[X]+X]+F[-FX]+X)',
          loops: '5',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "600",
          gardenStep: '6',
          gardenLoops: '4',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.75',
        }
      }
    ).set("Fractal Plant",
      {
        rules: {
          angle: '25',
          step: '7',
          axiom: 'X',
          replacements: '(X = F+[[X]-X]-F[-GX]+X), (F = FF), (G = GG)',
          loops: '5',
          fColor: '#336600',
          gColor: '#86b300',
          bangColor: '#336600',
          startX: "300",
          startY: "600",
          gardenStep: '2',
          gardenLoops: '4',
          wrongStepChance: '0.25',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.25',
        }
      }
    ).set("Thorny Bush",
      {
        rules: {
          angle: '6',
          step: '25',
          axiom: 'F',
          replacements: '(F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)',
          loops: '3',
          fColor: '#99e6ff',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "400",
          startY: "600",
          gardenStep: '4',
          gardenLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.05',
          wrongAngleChance: '0.15',
          
        }
      }
    ).set("Bushy Tree",
      {
        rules: {
          angle: '15',
          step: '9',
          axiom: '!F',
          replacements:'(F=FF-[-F+F+F]+[+F-G-G]), (G=F)',
          loops: '4',
          fColor: '#996600',
          gColor: '#ffaa80',
          bangColor: '#996600',
          startX: "300",
          startY: "600",
          gardenStep: '3',
          gardenLoops: '3',
          wrongStepChance: '0.05',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.10',
        }
      }
    ).set("Thistle",
      {
        rules: {
          angle: '20',
          step: '8',
          axiom: '!!GF',
          replacements:'(F=GGG-[-F+F+F]+[+F-F+F])',
          loops: '4',
          fColor: '#ff3399',
          gColor: '#336600',
          bangColor: '#336600',
          startX: "300",
          startY: "600",
          gardenStep: '2',
          gardenLoops: '3',
          wrongStepChance: '0.10',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.10',
        }
      }
    ).set("Christmas Tree",
      {
        rules: {
          angle: '18',
          step: '11',
          axiom: 'LSLFFF',
          replacements:'(S=[+++G][---G]TS),(G=+H[-G]L),(H=-G[+H]L), (T=TL), (L=[-F[+F]F][+F[-F]F]F)',
          loops: '10',
          fColor: '#004d00',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "600",
          gardenStep: '5',
          gardenLoops: '5',
          wrongStepChance: '0.50',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.05',
        }
      }
    )
    /*
    .set("Fern",
      {
        rules: {
          angle: '18',
          step: '11',
          axiom: 'LSLFFF',
          replacements:'(S=[+++G][---G]TS),(G=+H[-G]L),(H=-G[+H]L), (T=TL), (L=[-F[+F]F][+F[-F]F]F)',
          loops: '10',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "600",
          gardenStep: '5',
          gardenLoops: '5',
          wrongStepChance: '0.50',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.05',
        }
      }
    )
    */
    ;
     

export default Organisms;