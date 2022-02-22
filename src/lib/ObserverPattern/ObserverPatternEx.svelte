<script lang="ts">
  const subscriptions: Subscription[] = [
    { name: "ADD", label: "Add" },
    /**
     *  { name: "UPDATE", label: "Update" },
    { name: "REMOVE", label: "Remove" },
    */
  ];
  function handleSubscriptionClick(subscription: Subscription) {}
</script>

<article>
  <header>
    <h3>List Observer</h3>
  </header>
  <section>
    <div class="number-list-table">
      <div class="col-header">number</div>
      <div class="col-header">subcriptions</div>
      {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as n}
        <!-- if n is odd, subscribe it to NEW_NUMBER_ADDED_EVENT -->
        <span class="cell">{n}</span>
        <div class="cell">
          {#each subscriptions as subscription}
            <div>
              <button on:click={() => handleSubscriptionClick(subscription)}
                >{subscription.label}</button
              >
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>
</article>

<style scoped>
  section {
    margin-top: 10px;
  }

  .number-list-table {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
  .col-header {
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .cell {
    padding: 10px;
  }
</style>
