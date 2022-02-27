<script lang="ts">
  import { afterUpdate } from "svelte";

  import { NumberItem, NumberList } from "./numberList";

  let numbers: number[] = [0, 1, 2, 3];
  let observers: NumberItem[] = [];
  let count = 0;
  let currentHover: number = null;

  let style: "even" | "odd" = "even";

  const subscriptions: Subscription[] = [
    { type: "INC", label: "Addition" },
    { type: "DEC", label: "Substraction" },
  ];
  const numberList = new NumberList();

  let addNumber = (n: number) => {
    observers = [...numberList.addNumber(new NumberItem(n))];
  };

  let removeNumber = (n: number) => {
    observers = [...numberList.removeNumber(observer(n))];
  };

  function handleSubscriptionCheck(
    target: EventTarget,
    value: number,
    subscription: Subscription
  ) {
    const checked: boolean = (target as HTMLInputElement).checked;

    checked
      ? observer(value).subscribe(subscription)
      : observer(value).unsubscribe(subscription);
  }

  $: observer = (v: number) => {
    if (count % 2 === 0) {
      style = "even";
    } else {
      style = "odd";
    }
    return observers?.find((observer) => observer.value === v);
  };
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
            on:mouseout={() => (currentHover = null)}
            on:mouseover={() => (currentHover = value)}
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
          <div class="observers-list-wrapper">
            [{#each observers as observer}
              <div class="numbers-item">
                {observer.value}
              </div>
            {/each} ]
          </div>
        {/if}
      </div>
    </div>
    <div>
      <h4>counter app</h4>
      <div>
        <button on:click={() => numberList.update(++count, "INC")}>+</button>
        <button on:click={() => numberList.update(--count, "DEC")}>-</button>
      </div>
      <span class={`count ${style}`}>count {count} - {style}</span>
    </div>
    <div class="number-list-table">
      <div class="col-header">add/remove</div>
      <div class="col-header">number</div>
      <div class="col-header">subcriptions</div>
      <div class="col-header">notifications</div>
      {#each numbers as num}
        <div class="cell">
          {#if observer(num)}
            <button on:click={() => removeNumber(num)}>x</button>
          {:else}
            <button on:click={() => addNumber(num)}>+</button>
          {/if}
        </div>

        <span
          class={`cell ${
            currentHover === num
              ? "active"
              : num === observer(num)?.value
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
                  disabled={!observer(num)}
                  on:change={({ target }) =>
                    handleSubscriptionCheck(target, num, subscription)}
                />
                {subscription.label}
              </label>
            {/each}
          </div>
        </div>
        <div class="cell">
          <div class="notifications-wrapper">
            {#if observer(num)}
              <div>{observer(num)?.incrementMessage}</div>
              <div>{observer(num)?.decrementMessage}</div>
            {/if}
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

  .count {
    font-weight: 600;
  }
  .count.even {
    color: blue;
  }
  .count.odd {
    color: green;
  }

  .number-list-table {
    display: grid;
    grid-template-columns: 80px 150px 200px 1fr;
    border: 1px solid grey;
    height: 375px;
    width: 600px;
    overflow-y: scroll;
    margin-top: 18px;
  }
  .col-header {
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: blue;
    color: white;
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
    background-color: green;
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
  .observers-list-wrapper {
    display: inherit;
  }
  .numbers-item {
    padding: 0 10px 0 10px;
    cursor: pointer;
  }
</style>
