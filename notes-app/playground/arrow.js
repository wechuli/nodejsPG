const event = {
  name: "Birthday Party",
  guestList: ["Paul", "Jess", "Mercy", "Mike"],
  printGuestList: function() {
    console.log(`Guest list for ${this.name}`);
  },
  printGuestList2: () => {
    console.log(`Guest list for ${this.name}`);
  },
  listAllGuests() {
    //listAllGuests takes this of the object
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach(guest => {
      console.log(`${guest} is attending ${this.name}`);
    });
  }
};

event.printGuestList();
event.printGuestList2(); //undefined
event.listAllGuests();

//When a function is called as amethod of an object, its this is set to the object the method is called on

// Arrow functions are not well suited for methods - properties that are methods that we need access to this
