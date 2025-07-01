
        const countryData = {
            "india": [
                { url: "taj.jpg", name: "Taj Mahal", description: "The Taj Mahal is an ivory-white marble mausoleum in Agra, India, symbolizing love and beauty." },
                { url: "kumarakom.jpg", name: "Kumarakom", description: "Kumarakom is famous for its backwaters, serene houseboats, and scenic views." },
                { url: "mysore.jpg", name: "Mysore Palace", description: "Mysore Palace is a historic palace in the city of Mysore, Karnataka, India." }
            ],
            "japan": [
                { url: "fuji.jpeg", name: "Mount Fuji", description: "Mount Fuji is Japan's tallest mountain and an iconic symbol of the country." },
                { url: "kyoto.jpg", name: "Kyoto", description: "Kyoto is famous for its classical Buddhist temples, gardens, imperial palaces, and Shinto shrines." },
                { url: "tokyo.jpg", name: "Tokyo Tower", description: "Tokyo Tower is a communications and observation tower in the heart of Tokyo." }
            ],
            "australia": [
                { url: "sydney.jpg", name: "Sydney Opera House", description: "The Sydney Opera House is one of the most iconic landmarks in the world." },
                { url: "reef.jpg", name: "Great Barrier Reef", description: "The Great Barrier Reef is the largest coral reef system in the world." },
                { url: "uluru.jpg", name: "Uluru", description: "Uluru is a large sandstone rock formation in central Australia, sacred to Indigenous Australians." }
            ]
        };

        function searchCountry() {
            const countryInput = document.getElementById('countryInput').value.toLowerCase().trim();
            const vacationSpotsContainer = document.getElementById('vacationSpots');
            vacationSpotsContainer.innerHTML = ''; // Clear previous results

            if (countryData[countryInput]) {
                const places = countryData[countryInput];
                places.forEach(place => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.style.backgroundImage = `url(${place.url})`;

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
                    cardContent.innerHTML = `
                        <h3>${place.name}</h3>
                        <p class="description">${place.description}</p>
                    `;

                    card.appendChild(cardContent);
                    vacationSpotsContainer.appendChild(card);

                    // Add click event to expand the card
                    card.addEventListener("click", function () {
                        document.querySelectorAll(".card").forEach(c => {
                            c.classList.remove("expanded"); // Remove expanded class from all
                        });

                        this.classList.add("expanded"); // Expand only the clicked card
                    });
                });
            } else {
                vacationSpotsContainer.innerHTML = '<p>Sorry, no results found for this country. Please try again with a different country.</p>';
            }
        }
   