const rawContacts = require('./mock_contacts.json');
const account = require('./account.json');
const cards = require('./mock_cards.json')
const campaigns = require('./campaigns.json');
const segments = require('./Segments.json');
const categories = require('./listCategory.json')
const lists = require('./contactLists.json')
const labels = require('./labels.json')
const eventTypes = require('./tracker_event_types.json');
const events = require('./tracker_events.json');
const emailSenders = require('./mock_email_senders.json');
const smsSenders = require('./mock_sms_senders.json');
const emailTemplates = require('./email_templates.json');
const emailTemplateSamples = require('./email_template_samples.json');
const trackerGoals = require('./tracker_goals.json');
const trackerEvents = require('./tracker_events.json');
const transactions = require('./transactions.json');
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
  const data = { 
    account,
    contacts, 
    cards, 
    segments, 
    categories, 
    lists, 
    labels, 
    eventTypes, 
    events, 
    emailSenders, 
    smsSenders, 
    emailTemplates, 
    emailTemplateSamples, 
    trackerGoals, 
    trackerEvents, 
    transactions,
    campaigns
  }
  return data
}
