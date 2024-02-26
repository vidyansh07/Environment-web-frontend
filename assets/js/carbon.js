// Set emission factors for different activities in kgCO2e per unit
const emissions = {
    transportation: {
      car: 0.2,
      publicTransport: 0.05,
      bike: 0,
      walk: 0
    },
    housing: {
      apartment: 1,
      house: 2,
      offGrid: 0.5
    },
    food: {
      meat: 3.3,
      dairy: 1.6,
      plantBased: 0.8
    },
    other: {
      electricity: 0.5,
      waste: 0.2
    }
  };
  
  // Function to calculate carbon footprint
  function calculateCarbonFootprint() {
    // Get user inputs
    const transportationMethod = document.querySelector('#transportation').value;
    const housingType = document.querySelector('#housing').value;
    const foodType = document.querySelector('#food').value;
    const electricityUsage = document.querySelector('#electricity-usage').value;
    const wasteProduction = document.querySelector('#waste-production').value;
    
    // Calculate emissions
    const transportationEmissions = emissions.transportation[transportationMethod];
    const housingEmissions = emissions.housing[housingType];
    const foodEmissions = emissions.food[foodType];
    const electricityEmissions = emissions.other.electricity * electricityUsage;
    const wasteEmissions = emissions.other.waste * wasteProduction;
    
    // Calculate total emissions
    const totalEmissions = transportationEmissions + housingEmissions + foodEmissions + electricityEmissions + wasteEmissions;
    
    // Display results to user
    document.querySelector('#carbon-footprint').textContent = totalEmissions.toFixed(2);
  }
  