const rawContacts = require('./mock_contacts.json');
const cards = require('./mock_cards.json')
const segments = require('./Segments.json');
const categories = require('./listCategory.json')
const lists = require('./contactLists.json')
const labels = require('./labels.json')
const eventTypes = require('./tracker_event_types.json');
const events = require('./tracker_events.json');
// console.log({contacts, cards, segments});

module.exports = () => {
  const contacts = rawContacts.map(contact => {
    // contact.listId = []
    contact.listId = Math.ceil(Math.random() * lists.length);
    // const noOfLists = Math.ceil(Math.random() * 3)
    // for (let i = 0; i < noOfLists; i++) {
    //   const listId = Math.ceil(Math.random() * lists.length);
    //   if(!contact.listId.includes(listId)){
    //     contact.listId.push(listId)
    //   }
    // }
    return contact;
  })
  const data = { contacts, cards, segments, categories, lists, labels, eventTypes, events }
  return data
}
