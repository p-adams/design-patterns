<script lang="ts">
  import { NumberItem, NumberList, Observer } from "./numberList";

  let numbers: number[] = [0, 1, 2, 3];
  let observers: NumberItem[] = [];
  let currentHover: number = null;
  const subscriptions: Subscription[] = [
    { type: "ADDITION", label: "Addition" },
    { type: "SUBTRACTION", label: "Substraction" },

    /**
     *  { name: "UPDATE", label: "Update" },
    
    */
  ];
  const numberList = new NumberList();

  let addNumber = (n: number) => {
    observers = [...numberList.addNumber(new NumberItem(n))];
  };

  let removeNumber = (n: number) => {
    observers = [...numberList.removeNumber(selectedObserverByValue(n))];
  };

  function handleSubscriptionCheck(value: number, subscription: Subscription) {
    console.log("v: ", value, subscription.type);
    switch (subscription.type) {
      case "ADDITION":
        // get updates whenever an addition operation is performed on the list
        break;

      default:
        break;
    }
  }

  let _handleMouseover = (hoverItem: number) => (currentHover = hoverItem);

  let _handleMouseout = () => (currentHover = null);

  $: selectedObserverByValue = (v: number) =>
    observers?.find((observer) => observer.value === v);
</script>

<article>
  <header>
    <h3>List Observer</h3>
  </header>
  <section class="main">
    <div class="data-wrapper">
      <div class="title">number list</div>
      <div class="numbers-list-container">
        [{#each numbers as value}
          <div
            class="numbers-item"
            on:blur
            on:focus
            on:mouseout={() => _handleMouseout()}
            on:mouseover={(e) => _handleMouseover(value)}
          >
            {value}
          </div>
        {/each}]
      </div>
      <div class="title">observer list</div>
      <div class="numbers-list-observers">
        {#if observers.length === 0}
          empty
        {:else}
          [{#each observers as observer}
            <div class="numbers-item">
              {observer.value}
            </div>
          {/each} ]
        {/if}
      </div>
    </div>
    <div class="number-list-table">
      <div class="col-header">add/remove</div>
      <div class="col-header">number</div>
      <div class="col-header">subcriptions</div>
      {#each numbers as num}
        <div class="cell">
          {#if selectedObserverByValue(num)}
            <button on:click={() => removeNumber(num)}>x</button>
          {:else}
            <button on:click={() => addNumber(num)}>+</button>
          {/if}
        </div>

        <span
          class={`cell ${
            currentHover === num
              ? "active"
              : num === selectedObserverByValue(num)?.value
              ? "observer-item"
              : ""
          }`}>{num}</span
        >
        <div class="cell">
          <div class="subscriptions-wrapper">
            {#each subscriptions as subscription, i}
              <label>
                <input
                  type="checkbox"
                  disabled={!selectedObserverByValue(num)}
                  on:change={(_) => handleSubscriptionCheck(num, subscription)}
                />
                {subscription.label}
              </label>
            {/each}
          </div>
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
    grid-template-columns: 50px 150px 1fr;
    border: 1px solid grey;
    height: 375px;
    width: 400px;
    overflow-y: scroll;
    margin-top: 18px;
  }
  .col-header {
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .col-header,
  .cell {
    font-size: 10px;
  }

  .cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }

  .cell.active {
    background-color: lightblue;
    color: white;
    font-weight: 600;
  }

  .cell.observer-item {
    background-color: lightgreen;
    color: white;
    font-weight: 600;
  }

  .cell button {
    font-size: 10px;
  }

  .subscriptions-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
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
    margin-bottom: 12px;
  }
  .numbers-list-observers {
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .numbers-item {
    padding: 0 10px 0 10px;
    cursor: pointer;
  }
</style>
