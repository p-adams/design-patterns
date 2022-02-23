<script lang="ts">
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const subscriptions: Subscription[] = [
    { type: "ADD", label: "Add" },
    /**
     *  { name: "UPDATE", label: "Update" },
    { name: "REMOVE", label: "Remove" },
    */
  ];
  function handleSubscriptionClick(subscription: Subscription) {
    // TODO: inform observable to update its observers
    // numbers.notify(subscription, subscription.type);
  }
</script>

<article>
  <header>
    <h3>List Observer</h3>
  </header>
  <section class="main">
    <div class="data-wrapper">
      <div>number list</div>
      <div class="numbers-list-container">
        [{#each numbers as n}
          <div class="numbers-item">{n}</div>
        {/each}]
      </div>
    </div>
    <div class="number-list-table">
      <div class="col-header">number</div>
      <div class="col-header">subcriptions</div>
      {#each numbers as n}
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
    border: 1px solid grey;
    height: 400px;
    overflow-y: scroll;
    margin-top: 18px;
  }
  .col-header {
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .cell {
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .data-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .numbers-list-container {
    display: flex;
    margin-top: 12px;
  }
  .numbers-item {
    padding: 0 10px 0 10px;
  }
</style>
