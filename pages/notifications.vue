<template lang="pug">
.notificationsPage
  .page__title
    h1 Information
  section.notificationsPage__section
    ul.notifications
      li.notification
        nuxt-link(to="/")
          time
            i.far.fa-clock
            | 01/01 00:00
          p There are 3 completed explorations
      li.notification
        nuxt-link(to="/")
          time
            i.far.fa-clock
            | 01/01 00:00
          p There are 3 completed explorations
      li.notification
        nuxt-link(to="/")
          time
            i.far.fa-clock
            | 01/01 00:00
          p There are 3 completed explorations
      li.notification
        nuxt-link(to="/")
          time
            i.far.fa-clock
            | 01/01 00:00
          p There are 3 completed explorations
      li.notification
        nuxt-link(to="/")
          time
            i.far.fa-clock
            | 01/01 00:00
          p There are 3 completed explorations
</template>

<style lang="scss" scoped>
.notifications {
  border-bottom: 1px solid #eee;
  list-style-type: none;
  margin: 1rem -1rem;
  padding: 0;
}

.notification {
  border-top: 1px solid #eee;

  a {
    color: inherit;
    display: block;
    padding: 1rem;
    text-decoration: none;

    time {
      color: #999;
      font-family: Oswald;
      font-size: 0.8rem;

      svg {
        color: #ccc;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
