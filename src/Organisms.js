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
          loops: '6',
          fColor: '#ff00ff',
          gColor: '#006600',
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
          step: '3',
          axiom: 'F',
          replacements: '(F = F[+F]F[-F]F)',
          loops: '3'
        }
      }
    ).set("berryBush",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '25',
          step: '2',
          axiom: 'F',
          replacements: '(F = G[+F][-F]GF), (G = GG)',
          loops: '4',
          fColor: '#660066',
          gColor: '#446600',
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
          step: '3',
          axiom: 'FX',
          replacements: '(X = X+YG+), (Y = -FX-Y), (G = F)',
          loops: '8',
          fColor: '#990000',
          gColor: '#ff6699',
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
          replacements: '(X = F+[[X]-X]-F[-GX]+X), (F = FF), (G = GG)',
          loops: '4',
          fColor: '#004d1a',
          gColor: '#00e64d'
        }
      }
    ).set("thornyBush",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '6',
          step: '5',
          axiom: 'F',
          replacements: '(F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)',
          loops: '3',
          fColor: '#cccc00',
          bangColor: '#339966',
          
        }
      }
    ).set("bushyTree",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '15',
          step: '4',
          axiom: 'F',
          replacements:'(F=FF-[-F+F+F]+[+F-G-G]), (G=F)',
          loops: '3',
          fColor: '#996600',
          gColor: '#ffaa80',
        }
      }
    ).set("thistle",
      {
        resources: {
          nitrogen: '-1',
          oxygen: '+1',
          carbonDioxide: '-1'
          
        },
        rules: {
          angle: '20',
          step: '3',
          axiom: 'GF',
          replacements:'(F=GGG-[-F+F+F]+[+F-F+F])',
          loops: '3',
          fColor: '#3399ff',
          gColor: '#009973',
          bangColor: '#009973',
        }
      }
    )
    
    
    
     

export default Organisms;