import Root from './Root'

export default {
  name: "adituum",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/contact-form")
      }
    }
  }
}
