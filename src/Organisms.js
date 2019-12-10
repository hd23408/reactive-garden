import Immutable from 'immutable'

// A dictionary of organisms. Note
// that these don't have default X and Y
// values set, so you're probably going to 
// want to do something like this:
// 
// myOrganism = Object.assign({}, Organisms.get("algae").rules, {startX: '60', startY: '120'}) 
const Organisms = Immutable.Map(
    ).set("binaryTree",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '1',
          axiom: 'F',
          replacements: '(G = GG), (F = G[+F]-F)',
          loops: '6'
        }
      }
    ).set("algae",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '20',
          step: '4',
          axiom: 'F',
          replacements: '(F = F[+F]F[-F]F)',
          loops: '3'
        }
      }
    ).set("bush",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '5',
          axiom: 'X',
          replacements: '(X = F-[[X]+X]+F[-FX]+X)',
          loops: '4'
        }
      }
    ).set("dragon",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '90',
          step: '2',
          axiom: 'FX',
          replacements: '(X = X+YF+), (Y = -FX-Y)',
          loops: '8'
        }
      }
    ).set("fractalPlant",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '2',
          axiom: 'X',
          replacements: '(X = F+[[X]-X]-F[-FX]+X), (F = FF)',
          loops: '4'
        }
      }
    )

export default Organisms;