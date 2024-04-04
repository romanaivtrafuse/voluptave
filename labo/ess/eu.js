const superhero = {
  name: 'Hulk',
  powers: ['superhuman strength', 'durability', 'regeneration'],
  status: {
    mood: 'calm',
    energyLevel: 'high'
  },
  // Method to display current power status
  displayPowerStatus: function() {
    console.log(`${this.name} is currently ${this.status.mood} with ${this.status.energyLevel} energy levels.`);
  },
  // Method to simulate Hulk getting angry and gaining more power
  getAngry: function() {
    this.status.mood = 'angry';
    this.status.energyLevel = 'extreme';
    console.log(`${this.name} is now ${this.status.mood}! Energy levels are off the charts!`);
  }
};

// Example usage:
superhero.displayPowerStatus(); // Hulk is currently calm with high energy levels.
superhero.getAngry(); // Hulk is now angry! Energy levels are off the charts!
