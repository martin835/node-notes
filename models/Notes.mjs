//using Symbol object is a DATA HIDING TECHNIQUE for use as use for private fields in objects .... ???
//actual values of symbol instances are hidden here inside this module. Code outside of this module cannot access it...  p211-p214 of  the Book
const _note_key = Symbol("key");
const _note_title = Symbol("title");
const _note_body = Symbol("body");

//describes a single Note that our app will manage...
export class Note {
  constructor(key, title, body) {
    this[_note_key] = key;
    this[_note_title] = title;
    this[_note_body] = body;
  }

  get key() {
    return this[_note_key];
  }
  get title() {
    return this[_note_title];
  }
  set title(newTitle) {
    this[_note_title] = newTitle;
  }
  get body() {
    return this[_note_body];
  }
  set body(newBody) {
    this[_note_body] = newBody;
  }
}

//describes methods for managing some note instances
export class AbstractNotesStore {
  async close() {}
  async update(key, title, body) {}
  async create(key, title, body) {}
  async read(key) {}
  async destroy(key) {}
  async keylist() {}
  async count() {}
}
