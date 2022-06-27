const matcher =  require('./greeting');

describe('Test function welcome', () => {
    it('should throw error when name contains numberic characters', () => {
        expect(() => matcher.welcome('luan0')).toThrow(matcher.INVALID_ERROR)
    })
    
    it('should throw error when name is empty string', () => {
        expect(() => matcher.welcome('')).toThrow(matcher.INVALID_ERROR)
    })
    
    it('should throw error when name is undefined', () => {
        expect(() => matcher.welcome()).toThrow(matcher.INVALID_ERROR)
    })
    
    it('should throw error when name is a number', () => {
        expect(() => matcher.welcome(123)).toThrow(matcher.INVALID_ERROR)
    })

    it('should return correct sentence', () => {
        expect(matcher.welcome('Thanh Luan')).toBe('Welcome Thanh Luan to Cybozu company')
    })
})


