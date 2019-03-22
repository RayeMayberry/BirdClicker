export default {
    Resources : {
        'Birds' : {
            amount: null
        },
        'Birdseed': {
            amount: 100
        },
        'Trinkets' : {
            amount: null
        },
        'Birdfeeder' : {
            amount: null,
            capacity: 6 
        }
        
    },
    Clickers: {
        'feedBirds': {
            'name': 'Feed the birds',
            'buy': 'Birds', // resource to buy
            'buyCount': 1, // how many?
            'spend': 'Birdseed', // resource to spend
            'spendCount': 10, // how many?
            'successMessage': 'A bird landed in the garden! &#128038;',
            'errorMessage': 'Not enough birdseed'
        },
        'buyBirdseed': {
            'name': 'Buy more birdseed',
            'buy': 'Birdseed',
            'buyCount': 10,
            'spend': 'Trinkets',
            'spendCount': 1,
            'successMessage': null,
            'errorMessage': 'Not enough trinkets'
        },
        'buyBirdfeeder': {
            'name': 'x1 Birdfeeder',
            'buy': 'Birdfeeder',
            'buyCount': 1,
            'spend': 'Trinkets',
            'spendCount': 6,
            'successMessage': null,
            'errorMessage': 'Not enough trinkets'
        }, 
        'fillBirdfeeder': {
            'name': 'refill Birdfeeder',
            'buy':'Birdfeeder.capacity',
            'buyCount': 6,
            'spend': 'Birdseed',
            'spendCount': 6,
            'successMessage': null,
            'errorMessage': null
        }
    },
    'Alerts': [
        '<span>Welcome to your Bird Clicker garden. Scatter some seed for the birds to begin.</span>'
    ]   
};
