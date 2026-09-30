module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugin('email').service('email').send({
                to: env('EMAIL_TO'),
                from: env('RESEND_DEFAULT_FROM'),
                subject: `New feedback form submission`,
                text: `Feedback Type: ${result.type}\nTool: ${result.toolname}\nFeedback: ${result.feedback}\nEmail: {result.email}`,
            });
        } catch (err) {
            strapi.log.error('Failed to send contact email', err);
        }
    },
};
