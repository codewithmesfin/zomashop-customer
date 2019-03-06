const printMixin = {
  data() {
    return {
      output: null
    }
  },
  methods: {
    print() {
      this.$htmlToPaper('printMe');
    }
  }
}
export default printMixin