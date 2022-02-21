<script lang="ts">
  let today = new Date().toLocaleString();
  let subscriptions: Subscription[] = [
    { name: "announcements" },
    { name: "school cancellations" },
    { name: "meals" },
  ];
</script>

<article>
  <header>
    <h2>Bedrock High School Bulletin</h2>
    <div>Today {today}</div>
  </header>
  <section>
    <p>Stay informed by subscribing below</p>
    <ul>
      {#each subscriptions as subscription}
        <li>{subscription.name}</li>
      {/each}
    </ul>
  </section>
</article>

<style scoped>
  section {
    margin-top: 10px;
  }
  section p {
    text-transform: uppercase;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 10px auto;
  }
  ul li {
    text-transform: capitalize;
  }
  header h2 {
    font-size: 18px;
    color: blue;
  }
</style>
