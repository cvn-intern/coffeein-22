//test 
const welcome =  require('./Matcher');

describe('Test function hello', () => {
    test('Call function hello with name is "luan0". Function will be throw an error"', () => {
        expect(() => welcome('luan``')).toThrow(Error)
    })
    
    test('Call function hello with name is an empty string. Function will be throw an error', () => {
        expect(() => welcome('')).toThrow(Error)
    })
    
    test('Call function without argument. Function will be throw an error ', () => {
        expect(() => welcome()).toThrow(Error)
    })
    
    test('Call function with argument is a number. Function will be throw an error', () => {
        expect(() => welcome(123)).toThrow(Error)
    })
    
    test('Call function with name "Thanh Luan". Function will be return "Welcome Thanh Luan to Cybozu company"', () => {
        expect(welcome('Thanh Luan')).toBe('Welcome Thanh Luan to Cybozu company')
    })

    // Example about the wrong except
    test('Call function with name "Thanh Luan". Function will be return "Welcome Thanh Long to Cybozu company"', () => {
        expect(welcome('Phi Huy')).toBe('Welcome Thanh Long to Cybozu company')
    })
})


