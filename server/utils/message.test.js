var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'David';
        var text = 'Hello world';

        var message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeTruthy();
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        var from = 'David';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19'

        var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBeTruthy();
        expect(locationMessage.url).toBe(url);
        expect(locationMessage.createdAt).toBeTruthy();
    });
});
