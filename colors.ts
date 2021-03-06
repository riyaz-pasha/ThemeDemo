const mdColors = [
    '#F44336',
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FF8A80',
    '#FF5252',
    '#FF1744',
    '#D50000',
    '#E91E63',
    '#FCE4EC',
    '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
    '#FF80AB',
    '#FF4081',
    '#F50057',
    '#C51162',
    '#9C27B0',
    '#F3E5F5',
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC',
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C',
    '#EA80FC',
    '#E040FB',
    '#D500F9',
    '#AA00FF',
    '#673AB7',
    '#EDE7F6',
    '#D1C4E9',
    '#B39DDB',
    '#9575CD',
    '#7E57C2',
    '#673AB7',
    '#5E35B1',
    '#512DA8',
    '#4527A0',
    '#311B92',
    '#B388FF',
    '#7C4DFF',
    '#651FFF',
    '#6200EA',
    '#3F51B5',
    '#E8EAF6',
    '#C5CAE9',
    '#9FA8DA',
    '#7986CB',
    '#5C6BC0',
    '#3F51B5',
    '#3949AB',
    '#303F9F',
    '#283593',
    '#1A237E',
    '#8C9EFF',
    '#536DFE',
    '#3D5AFE',
    '#304FFE',
    '#2196F3',
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
    '#82B1FF',
    '#448AFF',
    '#2979FF',
    '#2962FF',
    '#03A9F4',
    '#E1F5FE',
    '#B3E5FC',
    '#81D4FA',
    '#4FC3F7',
    '#29B6F6',
    '#03A9F4',
    '#039BE5',
    '#0288D1',
    '#0277BD',
    '#01579B',
    '#80D8FF',
    '#40C4FF',
    '#00B0FF',
    '#0091EA',
    '#00BCD4',
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064',
    '#84FFFF',
    '#18FFFF',
    '#00E5FF',
    '#00B8D4',
    '#009688',
    '#E0F2F1',
    '#B2DFDB',
    '#80CBC4',
    '#4DB6AC',
    '#26A69A',
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40',
    '#A7FFEB',
    '#64FFDA',
    '#1DE9B6',
    '#00BFA5',
    '#4CAF50',
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
    '#B9F6CA',
    '#69F0AE',
    '#00E676',
    '#00C853',
    '#8BC34A',
    '#F1F8E9',
    '#DCEDC8',
    '#C5E1A5',
    '#AED581',
    '#9CCC65',
    '#8BC34A',
    '#7CB342',
    '#689F38',
    '#558B2F',
    '#33691E',
    '#CCFF90',
    '#B2FF59',
    '#76FF03',
    '#64DD17',
    '#CDDC39',
    '#F9FBE7',
    '#F0F4C3',
    '#E6EE9C',
    '#DCE775',
    '#D4E157',
    '#CDDC39',
    '#C0CA33',
    '#AFB42B',
    '#9E9D24',
    '#827717',
    '#F4FF81',
    '#EEFF41',
    '#C6FF00',
    '#AEEA00',
    '#FFEB3B',
    '#FFFDE7',
    '#FFF9C4',
    '#FFF59D',
    '#FFF176',
    '#FFEE58',
    '#FFEB3B',
    '#FDD835',
    '#FBC02D',
    '#F9A825',
    '#F57F17',
    '#FFFF8D',
    '#FFFF00',
    '#FFEA00',
    '#FFD600',
    '#FFC107',
    '#FFF8E1',
    '#FFECB3',
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFC107',
    '#FFB300',
    '#FFA000',
    '#FF8F00',
    '#FF6F00',
    '#FFE57F',
    '#FFD740',
    '#FFC400',
    '#FFAB00',
    '#FF9800',
    '#FFF3E0',
    '#FFE0B2',
    '#FFCC80',
    '#FFB74D',
    '#FFA726',
    '#FF9800',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100',
    '#FFD180',
    '#FFAB40',
    '#FF9100',
    '#FF6D00',
    '#FF5722',
    '#FBE9E7',
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
    '#F4511E',
    '#E64A19',
    '#D84315',
    '#BF360C',
    '#FF9E80',
    '#FF6E40',
    '#FF3D00',
    '#DD2C00',
    '#795548',
    '#EFEBE9',
    '#D7CCC8',
    '#BCAAA4',
    '#A1887F',
    '#8D6E63',
    '#795548',
    '#6D4C41',
    '#5D4037',
    '#4E342E',
    '#3E2723',
    '#9E9E9E',
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#607D8B',
    '#ECEFF1',
    '#CFD8DC',
    '#B0BEC5',
    '#90A4AE',
    '#78909C',
    '#607D8B',
    '#546E7A',
    '#455A64',
    '#37474F',
    '#263238',
    '#000000',
    '#FFFFFF',
];

const Colors = [
    '#F44336',
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FF8A80',
    '#FF5252',
    '#FF1744',
    '#D50000',
    '#FCE4EC',
    '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
    '#FF80AB',
    '#FF4081',
    '#F50057',
    '#C51162',
    '#F3E5F5',
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC',
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C',
    '#EA80FC',
    '#E040FB',
    '#D500F9',
    '#AA00FF',
    '#EDE7F6',
    '#D1C4E9',
    '#B39DDB',
    '#9575CD',
    '#7E57C2',
    '#673AB7',
    '#5E35B1',
    '#512DA8',
    '#4527A0',
    '#311B92',
    '#B388FF',
    '#7C4DFF',
    '#651FFF',
    '#6200EA',
    '#E8EAF6',
    '#C5CAE9',
    '#9FA8DA',
    '#7986CB',
    '#5C6BC0',
    '#3F51B5',
    '#3949AB',
    '#303F9F',
    '#283593',
    '#1A237E',
    '#8C9EFF',
    '#536DFE',
    '#3D5AFE',
    '#304FFE',
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
    '#82B1FF',
    '#448AFF',
    '#2979FF',
    '#2962FF',
    '#E1F5FE',
    '#B3E5FC',
    '#81D4FA',
    '#4FC3F7',
    '#29B6F6',
    '#03A9F4',
    '#039BE5',
    '#0288D1',
    '#0277BD',
    '#01579B',
    '#80D8FF',
    '#40C4FF',
    '#00B0FF',
    '#0091EA',
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064',
    '#84FFFF',
    '#18FFFF',
    '#00E5FF',
    '#00B8D4',
    '#E0F2F1',
    '#B2DFDB',
    '#80CBC4',
    '#4DB6AC',
    '#26A69A',
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40',
    '#A7FFEB',
    '#64FFDA',
    '#1DE9B6',
    '#00BFA5',
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
    '#B9F6CA',
    '#69F0AE',
    '#00E676',
    '#00C853',
    '#F1F8E9',
    '#DCEDC8',
    '#C5E1A5',
    '#AED581',
    '#9CCC65',
    '#8BC34A',
    '#7CB342',
    '#689F38',
    '#558B2F',
    '#33691E',
    '#CCFF90',
    '#B2FF59',
    '#76FF03',
    '#64DD17',
    '#F9FBE7',
    '#F0F4C3',
    '#E6EE9C',
    '#DCE775',
    '#D4E157',
    '#CDDC39',
    '#C0CA33',
    '#AFB42B',
    '#9E9D24',
    '#827717',
    '#F4FF81',
    '#EEFF41',
    '#C6FF00',
    '#AEEA00',
    '#FFFDE7',
    '#FFF9C4',
    '#FFF59D',
    '#FFF176',
    '#FFEE58',
    '#FFEB3B',
    '#FDD835',
    '#FBC02D',
    '#F9A825',
    '#F57F17',
    '#FFFF8D',
    '#FFFF00',
    '#FFEA00',
    '#FFD600',
    '#FFF8E1',
    '#FFECB3',
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFC107',
    '#FFB300',
    '#FFA000',
    '#FF8F00',
    '#FF6F00',
    '#FFE57F',
    '#FFD740',
    '#FFC400',
    '#FFAB00',
    '#FFF3E0',
    '#FFE0B2',
    '#FFCC80',
    '#FFB74D',
    '#FFA726',
    '#FF9800',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100',
    '#FFD180',
    '#FFAB40',
    '#FF9100',
    '#FF6D00',
    '#FBE9E7',
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
    '#F4511E',
    '#E64A19',
    '#D84315',
    '#BF360C',
    '#FF9E80',
    '#FF6E40',
    '#FF3D00',
    '#DD2C00',
    '#EFEBE9',
    '#D7CCC8',
    '#BCAAA4',
    '#A1887F',
    '#8D6E63',
    '#795548',
    '#6D4C41',
    '#5D4037',
    '#4E342E',
    '#3E2723',
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#ECEFF1',
    '#CFD8DC',
    '#B0BEC5',
    '#90A4AE',
    '#78909C',
    '#607D8B',
    '#546E7A',
    '#455A64',
    '#37474F',
    '#263238',
    '#000000',
];

// var Mat_Colors = {
//     red = {
//         '#F44336': "red",
//         lighten = {
//             '#FFEBEE': "lighten-5",
//             '#FFCDD2': "lighten-4",
//             '#EF9A9A': "lighten-3",
//             '#E57373': "lighten-2",
//             '#EF5350': "lighren-1",
//         },
//         darken = {
//             '#E53935': "darken-1",
//             '#D32F2F': "darken-2",
//             '#C62828': "darken-3",
//             '#B71C1C': "darken-4",
//         },
//         accent = {
//             '#FF8A80': "accent-1",
//             '#FF5252': "accent-2",
//             '#FF1744': "accent-3",
//             '#D50000': "accent-4",
//         }
//     },
//     pink = {
//         '#E91E63': "pink",
//         lighten = {
//             '#FCE4EC': "lighten-5",
//             '#F8BBD0': "lighten-4",
//             '#F48FB1': "lighten-3",
//             '#F06292': "lighten-2",
//             '#EC407A': "lighten-1",
//         },
//         darken = {
//             '#D81B60': "darken-1",
//             '#C2185B': "darken-2",
//             '#AD1457': "darken-3",
//             '#880E4F': "darken-4",
//         },
//         accent = {
//             '#FF80AB': "accent-1",
//             '#FF4081': "accent-2",
//             '#F50057': "accent-3",
//             '#C51162': "accent-4",
//         }
//     },
//     purple = {
//         '#9C27B0': "purple",
//         lighten = {
//             '#F3E5F5': "lighten-5",
//             '#E1BEE7': "lighten-4",
//             '#CE93D8': "lighten-3",
//             '#BA68C8': "lighten-2",
//             '#AB47BC': "lighten-1",
//         },
//         darken = {
//             '#8E24AA': "darken-1",
//             '#7B1FA2': "darken-2",
//             '#6A1B9A': "darken-3",
//             '#4A148C': "darken-4",
//         },
//         accent = {
//             '#EA80FC': "accent-1",
//             '#E040FB': "accent-2",
//             '#D500F9': "accent-3",
//             '#AA00FF': "accent-4",
//         }
//     },
//     deep_purple = {
//         '#673AB7': "deep_purple",
//         lighten = {
//             '#EDE7F6': "lighten-5",
//             '#D1C4E9': "lighten-4",
//             '#B39DDB': "lighten-3",
//             '#9575CD': "lighten-2",
//             '#7E57C2': "lighten-1",
//         },
//         darken = {
//             '#5E35B1': "darken-1",
//             '#512DA8': "darken-2",
//             '#4527A0': "darken-3",
//             '#311B92': "darken-4",
//         },
//         accent = {
//             '#B388FF': "accent-1",
//             '#7C4DFF': "accent-2",
//             '#651FFF': "accent-3",
//             '#6200EA': "accent-4",
//         }
//     },
//     indigo = {
//         '#3F51B5': "indigo",
//         lighten = {
//             '#E8EAF6': "lighten-5",
//             '#C5CAE9': "lighten-4",
//             '#9FA8DA': "lighten-3",
//             '#7986CB': "lighten-2",
//             '#5C6BC0': "lighten-1",
//         },
//         darken = {
//             '#3949AB': "darken-1",
//             '#303F9F': "darken-2",
//             '#283593': "darken-3",
//             '#1A237E': "darken-4",
//         },
//         accent = {
//             '#8C9EFF': "accent-1",
//             '#536DFE': "accent-2",
//             '#3D5AFE': "accent-3",
//             '#304FFE': "accent-4",
//         }
//     },
//     blue = {
//         '#2196F3': "blue",
//         lighten = {
//             '#E3F2FD': "lighten-5",
//             '#BBDEFB': "lighten-4",
//             '#90CAF9': "lighten-3",
//             '#64B5F6': "lighten-2",
//             '#42A5F5': "lighten-1",
//         },
//         darken = {
//             '#1E88E5': "darken-1",
//             '#1976D2': "darken-2",
//             '#1565C0': "darken-3",
//             '#0D47A1': "darken-4",
//         },
//         accent = {
//             '#82B1FF': "accent-1",
//             '#448AFF': "accent-2",
//             '#2979FF': "accent-3",
//             '#2962FF': "accent-4",
//         }
//     },
//     light_blue = {
//         '#03A9F4': "light_blue",
//         lighten = {
//             '#E1F5FE': "lighten-5",
//             '#B3E5FC': "lighten-4",
//             '#81D4FA': "lighten-3",
//             '#4FC3F7': "lighten-2",
//             '#29B6F6': "lighten-1",
//         },
//         darken = {
//             '#039BE5': "darken-1",
//             '#0288D1': "darken-2",
//             '#0277BD': "darken-3",
//             '#01579B': "darken-4",
//         },
//         accent = {
//             '#80D8FF': "accent-1",
//             '#40C4FF': "accent-2",
//             '#00B0FF': "accent-3",
//             '#0091EA': "accent-4",
//         }
//     },
//     cyan = {
//         '#00BCD4': "cyan",
//         lighten = {
//             '#E0F7FA': "lighten-5",
//             '#B2EBF2': "lighten-4",
//             '#80DEEA': "lighten-3",
//             '#4DD0E1': "lighten-2",
//             '#26C6DA': "lighten-1",
//         },
//         darken = {
//             '#00ACC1': "darken-1",
//             '#0097A7': "darken-2",
//             '#00838F': "darken-3",
//             '#006064': "darken-4",
//         },
//         accent = {
//             '#84FFFF': "accent-1",
//             '#18FFFF': "accent-2",
//             '#00E5FF': "accent-3",
//             '#00B8D4': "accent-4",
//         }
//     },
//     teal = {
//         '#009688': "teal",
//         lighten = {
//             '#E0F2F1': "lighten-5",
//             '#B2DFDB': "lighten-4",
//             '#80CBC4': "lighten-3",
//             '#4DB6AC': "lighten-2",
//             '#26A69A': "lighten-1",
//         },
//         darken = {
//             '#00897B': "darken-1",
//             '#00796B': "darken-2",
//             '#00695C': "darken-3",
//             '#004D40': "darken-4",
//         },
//         accent = {
//             '#A7FFEB': "accent-1",
//             '#64FFDA': "accent-2",
//             '#1DE9B6': "accent-3",
//             '#00BFA5': "accent-4",
//         }
//     },
//     green = {
//         '#4CAF50': "green",
//         lighten = {
//             '#E8F5E9': "lighten-5",
//             '#C8E6C9': "lighten-4",
//             '#A5D6A7': "lighten-3",
//             '#81C784': "lighten-2",
//             '#66BB6A': "lighten-1",
//         },
//         darken = {
//             '#43A047': "darken-1",
//             '#388E3C': "darken-2",
//             '#2E7D32': "darken-3",
//             '#1B5E20': "darken-4",
//         },
//         accent = {
//             '#B9F6CA': "accent-1",
//             '#69F0AE': "accent-2",
//             '#00E676': "accent-3",
//             '#00C853': "accent-4",
//         }
//     },
//     light_green = {
//         '#8BC34A': "light_green",
//         lighten = {
//             '#F1F8E9': "lighten-5",
//             '#DCEDC8': "lighten-4",
//             '#C5E1A5': "lighten-3",
//             '#AED581': "lighten-2",
//             '#9CCC65': "lighten-1",
//         },
//         darken = {
//             '#7CB342': "darken-1",
//             '#689F38': "darken-2",
//             '#558B2F': "darken-3",
//             '#33691E': "darken-4",
//         },
//         accent = {
//             '#CCFF90': "accent-1",
//             '#B2FF59': "accent-2",
//             '#76FF03': "accent-3",
//             '#64DD17': "accent-4",
//         }
//     },
//     lime = {
//         '#CDDC39': "lime",
//         lighten = {
//             '#F9FBE7': "lighten-5",
//             '#F0F4C3': "lighten-4",
//             '#E6EE9C': "lighten-3",
//             '#DCE775': "lighten-2",
//             '#D4E157': "lighten-1",
//         },
//         darken = {
//             '#C0CA33': "darken-1",
//             '#AFB42B': "darken-2",
//             '#9E9D24': "darken-3",
//             '#827717': "darken-4",
//         },
//         accent = {
//             '#F4FF81': "accent-1",
//             '#EEFF41': "accent-2",
//             '#C6FF00': "accent-3",
//             '#AEEA00': "accent-4",
//         }
//     },
//     yellow = {
//         '#FFEB3B': "yellow",
//         lighten = {
//             '#FFFDE7': "lighten-5",
//             '#FFF9C4': "lighten-4",
//             '#FFF59D': "lighten-3",
//             '#FFF176': "lighten-2",
//             '#FFEE58': "lighten-1",
//         },
//         darken = {
//             '#FDD835': "darken-1",
//             '#FBC02D': "darken-2",
//             '#F9A825': "darken-3",
//             '#F57F17': "darken-4",
//         },
//         accent = {
//             '#FFFF8D': "accent-1",
//             '#FFFF00': "accent-2",
//             '#FFEA00': "accent-3",
//             '#FFD600': "accent-4",
//         }
//     },
//     amber = {
//         '#ffc107': "amber",
//         lighten = {
//             '#fff8e1': 'lighten-5',
//             '#ffecb3': "lighten-4",
//             '#ffe082': "lighten-3",
//             '#ffd54f': "lighten-2",
//             '#ffca28': 'lighten-1',
//         },
//         darken = {
//             '#ffb300': "darken-1",
//             '#ffa000': "darken-2",
//             '#ff8f00': "darken-3",
//             '#ff6f00': "darken-4",
//         },
//         accent = {
//             '#ffe57f': "accent-1",
//             '#ffd740': "accent-2",
//             '#ffc400': "accent-3",
//             '#ffab00': "accent-4",
//         }
//     },
//     orange = {
//         '#FF9800': "orange",
//         lighten = {
//             '#FFF3E0': "lighten-5",
//             '#FFE0B2': "lighten-4",
//             '#FFCC80': "lighten-3",
//             '#FFB74D': "lighten-2",
//             '#FFA726': "lighten-1",
//         },
//         darken = {
//             '#FB8C00': "darken-1",
//             '#F57C00': "darken-2",
//             '#EF6C00': "darken-3",
//             '#E65100': "darken-4",
//         },
//         accent = {
//             '#FFD180': "accent-1",
//             '#FFAB40': "accent-2",
//             '#FF9100': "accent-3",
//             '#FF6D00': "accent-4",
//         }
//     },
//     deep_orange = {
//         '#FF5722': "deep_orange",
//         lighten = {
//             '#FBE9E7': "lighten-5",
//             '#FFCCBC': "lighten-4",
//             '#FFAB91': "lighten-3",
//             '#FF8A65': "lighten-2",
//             '#FF7043': "lighten-1",
//         },
//         darken = {
//             '#F4511E': "darken-1",
//             '#E64A19': "darken-2",
//             '#D84315': "darken-3",
//             '#BF360C': "darken-4",
//         },
//         accent = {
//             '#FF9E80': "accent-1",
//             '#FF6E40': "accent-2",
//             '#FF3D00': "accent-3",
//             '#DD2C00': "accent-4",
//         }
//     },
//     brown = {
//         '#795548': "brown",
//         lighten = {
//             '#EFEBE9': "lighten-5",
//             '#D7CCC8': "lighten-4",
//             '#BCAAA4': "lighten-3",
//             '#A1887F': "lighten-2",
//             '#8D6E63': "lighten-1",
//         },
//         darken = {
//             '#6D4C41': "darken-1",
//             '#5D4037': "darken-2",
//             '#4E342E': "darken-3",
//             '#3E2723': "darken-4",
//         }
//     },
//     grey = {
//         '#9E9E9E': "grey",
//         '#000000': "black",
//         lighten = {
//             '#FAFAFA': "lighten-5",
//             '#F5F5F5': "lighten-4",
//             '#EEEEEE': "lighten-3",
//             '#E0E0E0': "lighten-2",
//             '#BDBDBD': "lighten-1",
//         },
//         darken = {
//             '#757575': "darken-1",
//             '#616161': "darken-2",
//             '#424242': "darken-3",
//             '#212121': "darken-4",
//         }
//     },
//     blue_grey = {
//         '#607D8B': "blue_grey",
//         lighten = {
//             '#ECEFF1': "lighten-5",
//             '#CFD8DC': "lighten-4",
//             '#B0BEC5': "lighten-3",
//             '#90A4AE': "lighten-2",
//             '#78909C': "lighten-1",
//         },
//         darken = {
//             '#546E7A': "darken-1",
//             '#455A64': "darken-2",
//             '#37474F': "darken-3",
//             '#263238': "darken-4",
//         }
//     }
// };

export {
    mdColors,
    Colors,
    // Mat_Colors
}