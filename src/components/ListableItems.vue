<template>
  <section>
    <slot
      name="items"
      :items="items"
      :loading="loaders.fetchingItems"
    />
    <slot
      name="pagination"
      :onPageChange="onPageChange"
      :pageMeta="page"
      :loading="loaders.fetchingItems"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ApiServiceContract from '@/types/services/api/ApiServiceContract';
import { mapActions, mapGetters } from 'vuex';
import StoreName from '@/constants/store/StoreName';
import CoreStoreActions from '@/constants/store/core/CoreStoreActions';
import CoreStoreGetters from '@/constants/store/core/CoreStoreGetters';
import debounce from 'lodash.debounce';
import { AxiosRequestConfig } from '@/types/backend/Axios';

export default defineComponent({
  name: 'ListableItems',
  props: {
    service: {
      type: Object as () => Pick<ApiServiceContract<never>, 'list'>,
      required: true,
    },
    config: {
      type: Object as () => AxiosRequestConfig,
      default: () => ({}),
    },
  },
  data: () => ({
    loaders: {
      fetchingItems: false,
    },
  }),
  methods: {
    ...mapActions(StoreName.Core, [
      CoreStoreActions.GET_ITEMS,
    ]),
    async onPageChange(page: number) {
      this.loaders.fetchingItems = true;
      await this[CoreStoreActions.GET_ITEMS]({
        service: this.service,
        config: { ...this.config, params: { ...this.config.params, page } },
      });
      this.loaders.fetchingItems = false;
    },
    fetchItemsDebounced: debounce(async function (this: any, payload) {
      this.loaders.fetchingItems = true;
      await this[CoreStoreActions.GET_ITEMS](payload);
      this.loaders.fetchingItems = false;
    }, 300),
  },
  watch: {
    config: {
      deep: true,
      immediate: true,
      handler(config: AxiosRequestConfig) {
        this.fetchItemsDebounced({
          service: this.service,
          // @todo: add filters to config
          config: { ...config, params: { ...config.params } },
        });
      },
    },
  },
  computed: {
    ...mapGetters(StoreName.Core, {
      items: CoreStoreGetters.GET_LISTABLE_ITEMS_ITEMS,
      page: CoreStoreGetters.GET_LISTABLE_ITEMS_PAGE_META,
    }),
  },
});
</script>
