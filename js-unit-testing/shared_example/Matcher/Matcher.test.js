//test 
const hello =  require('./Matcher');

describe('Test function hello', () => {
    test('Call function hello with name is "luan0". Function will be throw an error"', () => {
        expect(() => hello('luan0')).toThrow(Error)
    })
    
    test('Call function hello with name is an empty string. Function will be throw an error', () => {
        expect(() => hello('')).toThrow(Error)
    })
    
    test('Call function without argument. Function will be throw an error ', () => {
        expect(() => hello()).toThrow(Error)
    })
    
    test('Call function with argument is a number. Function will be throw an error', () => {
        expect(() => hello(123)).toThrow(Error)
    })
    
    test('Call function with name "Thanh Luan". Function will be return Hello Thanh Luan', () => {
        expect(hello('Thanh Luan')).toBe('Hello Thanh Luan')
    })
})
