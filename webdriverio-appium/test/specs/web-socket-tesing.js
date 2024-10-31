describe('WebSocket Testing with Cypress', () => {
    it('should connect to WebSocket server and receive a message', () => {
        // Establish a WebSocket connection
        const ws = new WebSocket('https://chatgpt.com/backend-api/conversation');

        // Listen for messages from the server
        ws.onmessage = function (event) {
            // Assert the received message
            expect(event.data).to.equal('Expected Message');
            ws.close();
        };

        // Send a message to the server
        ws.onopen = function () {
            ws.send('Hello, Server!');
        };
    });
});
