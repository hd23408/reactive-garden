import Immutable from 'immutable'

// A dictionary of organisms. Note
// that these don't have default X and Y
// values set, so you're probably going to 
// want to do something like this:
// 
// myOrganism = Object.assign({}, Organisms.get("algae").rules, {startX: '60', startY: '120'}) 
const Organisms = Immutable.Map(
    ).set("Sierpinski Triangle",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '120',
          step: '7',
          axiom: 'F-G-G',
          replacements: '(F = F-G+F+G-F), (G = GG)',
          loops: '6',
          fColor: 'RANDOM',
          gColor: 'RANDOM',
          bangColor: 'RANDOM',
          startX: "10",
          startY: "600",
          littleStep: '6',
          littleLoops: '2',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Koch Curve",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          startY: "600",
          littleStep: '3',
          littleLoops: '2',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
     ).set("Kolam",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          littleStep: '5',
          littleLoops: '1',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Dragon Curve",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          startY: "200",
          littleStep: '3',
          littleLoops: '4',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
      
      
      
    ).set("Binary Tree",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '4',
          axiom: 'F',
          replacements: '(G = GG), (F = G[+F]-F)',
          loops: '7',
          fColor: '#ff3399',
          gColor: '#336600',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "600",
          littleStep: '2',
          littleLoops: '5',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Algae",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          littleStep: '3',
          littleLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Berry Bush",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '4',
          axiom: 'F',
          replacements: '(F = G[+F][-F]GF), (G = GG)',
          loops: '6',
          fColor: '#ff3399',
          gColor: '#336600',
          bangColor: '#009973',
          startX: "300",
          startY: "600",
          littleStep: '3',
          littleLoops: '4',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Little Bush",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          littleStep: '6',
          littleLoops: '4',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Fractal Plant",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '7',
          axiom: 'X',
          replacements: '(X = F+[[X]-X]-F[-GX]+X), (F = FF), (G = GG)',
          loops: '5',
          fColor: '#336600',
          gColor: '#336600',
          bangColor: 'RANDOM',
          startX: "300",
          startY: "600",
          littleStep: '2',
          littleLoops: '4',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Thorny Bush",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          littleStep: '4',
          littleLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
          
        }
      }
    ).set("Bushy Tree",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          littleStep: '3',
          littleLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    ).set("Thistle",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
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
          littleStep: '2',
          littleLoops: '3',
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',
        }
      }
    );
     

export default Organisms;