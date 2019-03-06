import app from '../../main';

const formErrorHandling = {
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    showErrors(err) {
      let error;
      if (err.statusCode === 404) {
        app.$notify({
          title: 'Not Found',
          type: 'danger',
          message: err.message || 'Item not found.',
        });
      }
      if (err.statusCode === 422) {
        const { messages } = err.details;
        error = messages;
      }
      if (err.statusCode === 400) {
        error = err.message;
      }
      this.errorMessage = error;
    },
  },
};
export default formErrorHandling;
