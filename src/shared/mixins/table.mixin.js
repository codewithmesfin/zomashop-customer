import {
  buildFilter,
  buildSearchFilter
} from "@/util";

const debounce = require("lodash.debounce");

const DEFAULT_ITEMS_PER_PAGE = 5;

const tableMixin = {
  data() {
    return {
      searchable: true,
      totalItems: 0,
      items: [],
      loading: true,
      search: "",
      //paginationShouldUpdate: true,
      searchStarted: false
    };
  },

  created() {
    this.loadData()
  },

  methods: {

    async deleteItem(id) {
      const confirmed = await this.$confirm(this.$t("are_you_sure"), {
        buttonTrueText: this.$t("yes"),
        buttonFalseText: this.$t("no")
      });
      if (confirmed) {
        await this.resource.remove(id);
        this.$notify({
          type: "success",
          title: "Success",
          message: `${this.resourceName} ${this.$t("deleted")} ${this.$t(
            "successfully"
          )}.`
        });
        this.loadData();
      }
    },
    async loadData() {
      const filters = {
        ...this.filter,
      };
      const {
        rows,
        count
      } = await this.resource.all(filters);
      this.items = rows;
      this.totalItems = count;
      this.loading = false;

    }
  }
};

export default tableMixin;