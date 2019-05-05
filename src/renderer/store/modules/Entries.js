const state = [
  {
    id: 'f8863efe-681a-42ab-9711-401852753eca',
    body: 'Imaging, Respiratory System, Computerized Tomography (CT Scan)',
    title: 'Cross-group bi-directional internet solution',
    date: '1469917687'
  }
]

const mutations = {
  NEW_ENTRY(state, entryID) {
    state.entries.push({
      id: entryID,
      body: '',
      title: '',
      createdDate: Date.now(),
      date: Date.now()
    })
  },
  EDIT_ENTRY(state, changedEntry) {
    let currentEntry = state.find(entry => changedEntry.id === entry.id)
    currentEntry.body = changedEntry.body
    currentEntry.title = changedEntry.title
    currentEntry.date = changedEntry.date
  }
}

const actions = {
  newEntry({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
