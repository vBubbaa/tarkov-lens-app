<template>
  <q-item v-ripple clickable>
    <q-select
      class="select"
      v-model="model"
      use-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      option-label="name"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">No results</q-item-section>
        </q-item>
      </template>
      <template #prepend>
        <q-icon name="mdi-magnify" />
      </template>
    </q-select>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import useItemService from 'src/hooks/useItemService';

export default defineComponent({
  name: 'Search',
  setup() {
    const { getItemByName } = useItemService();

    const fetchedItems = [
      {
        id: 1,
        name: 'Gun',
      },
      {
        id: 2,
        name: 'Ammo',
      },
    ];
    const options = ref(fetchedItems);

    return {
      model: ref(null),
      options,

      filterFn(val: string) {
        if (val.length > 2) {
          getItemByName(val).then((data) => {
            console.log(data);
          });
        }
      },
    };
  },
});
</script>

<style scoped>
.select {
  width: 100%;
}
</style>

function ref(arg0: null) { throw new Error('Function not implemented.'); }
function ref(arg0: null) { throw new Error('Function not implemented.'); }
