export class Contacts {
  constructor(contacts) {
    this.contacts = contacts.edges[0].node.contact;
  }

  getContactDetail(name) {
    return this.contacts.find((item) => item.name === name);
  }
}
