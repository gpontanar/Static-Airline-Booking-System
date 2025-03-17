# Technical Specifications Document

## 1. Title Page
- **Project Name**: Airline Booking System
- **Version**: 
- **Date**: 
- **Author(s)**:    
Joseph Ryan Caballero   
Grace Pontanar   
Iasaiah Alves   
Jerrelyn Del Pilar   
Lia Clemente   

- **Github URL**:   
https://gpontanar.github.io/Static-Airline-Booking-System/

## 2. Table of Contents
1. [Introduction](#3-introduction)
2. [Overall Description](#4-overall-description)
3. [Visual Mockup Reference](#5-visual-mockup-reference)
4. [Features](#6-features)
5. [Functional Requirements](#7-functional-requirements)
6. [Non-Functional Requirements](#8-non-functional-requirements)
7. [Data Requirements](#9-data-requirements)
8. [External Interface Requirements](#10-external-interface-requirements)
9. [Glossary](#11-glossary)
10. [Appendices](#12-appendices)

## 3. Introduction
- **Purpose**: The Airline Booking System is designed to provide users with a seamless and efficient platform to search, compare, and book airline tickets. The system offers an intuitive interface with essential features such as flight search, booking confirmation, user dashboard, and payment processing.
- **Scope**: 
This application will allow users to:
Search for flights based on their preferences
Compare flight options
Make secure bookings
View upcoming flight details
Manage user profile and itinerary details

The application will not handle airline operations, baggage tracking, or real-time flight tracking.

- **Definitions, Acronyms, and Abbreviations**:
NoSQL: Non-relational database for flexible data storage
UI/UX: User Interface/User Experience
API: Application Programming Interface

- **References**:
Bootstrap documentation: https://getbootstrap.com/
JavaScript documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 4. Overall Description
- **Product Perspective**: The Airline Booking System functions as a standalone web application for travelers to book flights. It integrates with third-party flight data sources for real-time flight availability.

- **Product Functions**: 
Flight search with filters
User authentication
Booking management
Payment processing
User dashboard with itinerary details
Mobile responsive system
Can easily manage booking using mobile phones or tablets
Has the option to download itinerary tickets

- **User Classes and Characteristics**:
Regular Users: Search and book flights
Admin Users: Manage system settings and promotions

- **Operating Environment**: 
Frontend: HTML, CSS, Bootstrap, JavaScript
Backend: NoSQL database
Network: Cloud-based deployment

- **Assumptions and Dependencies**: 
Requires internet connectivity
Payment gateway integration for secure transactions

## 5. Visual Mockup Reference
- **Link or Screenshot**: https://www.figma.com/design/lOiGafupfytA7AWHaIiGZJ/MCP-Side-Project-(Airline-Booking-System))?node-id=73-2&p=f&t=tVXqkQW97sn8SgdE-0

## 6. Features

- **Feature 1**: Flight Search
```js 
              function searchFlights(departureCity, destinationCity, departureDate, returnDate, numberOfPassengers, filters, selectedFlightsForComparison) {
              // Validate input parameters
              if (!departureCity || !destinationCity || !departureDate || numberOfPassengers <= 0) {
                  return "Invalid input parameters";
              }
              // Fetch available flights
              let availableFlights = fetchFlights(departureCity, destinationCity, departureDate, returnDate, numberOfPassengers);
              // Apply filters and sorting
              let filteredFlights = applyFiltersAndSort(availableFlights, filters);
              // Provide flight comparison if needed
              if (selectedFlightsForComparison) {
                  let comparisonTable = compareFlights(selectedFlightsForComparison);
                  return comparisonTable;
              }
              // Return the list of available flights
              return filteredFlights;
          }
  ```

- **Feature 2**: User Authentication(Login/out)
```js
            function loginUser(email, password) {
            // Find the user by email
            let user = findUserByEmail(email);
            // Check if user exists and password matches
            if (user && checkPassword(password, user.hashedPassword)) {
            // Generate an authentication token for the user
            let token = generateAuthToken(user);
            return token;
            } else {
            // Return an error message if credentials are invalid
            return "Invalid credentials";
            }
          }
```

- **Feature 3**: Booking and Payment Processing
```js
          function bookAndPay(userBookingDetails, paymentDetails) {
          // Store booking details
          let booking = storeBookingDetails(userBookingDetails);
          // Process payment
          let paymentStatus = processPayment(paymentDetails);
          if (paymentStatus.success) {
              // Generate booking confirmation
              let confirmation = generateBookingConfirmation(booking);
              return confirmation;
          } else {
              // Handle payment failure
              return "Payment failed. Please try again.";
          }
      }

```

- **Feature 4**: Flight Search Results and Details
```js
        function displayFlightSearchResults(searchQuery) {
        // Fetch search results
        let searchResults = fetchSearchResults(searchQuery);
        // Retrieve and display flight details
        let detailedResults = searchResults.map(result => getFlightDetails(result));
        // Display booking summary
        let bookingSummary = generateBookingSummary(detailedResults);
        return { detailedResults, bookingSummary };
    }
```

- **Feature 5**: Download/Print Ticket and Itinerary Details
```js
        function downloadOrPrintTicket(bookingReference) {
        // Generate PDF/e-ticket
        let ticket = generateTicketPDF(bookingReference);
        // Fetch itinerary details
        let itinerary = fetchItineraryDetails(bookingReference);
        // Display upcoming trips
        let upcomingTrips = fetchUpcomingFlights(bookingReference);
        return { ticket, itinerary, upcomingTrips };
    }   
```

- **Feature 6**: Promotions, Offers, and Popular Destinations
```js
      function displayPromotionsAndPopularDestinations(userPreferences, promotionalCampaigns, flightPopularityData) {
      // Fetch and apply discount rules
      let applicablePromotions = fetchApplicablePromotions(userPreferences, promotionalCampaigns);
      let validPromotions = applyDiscountRules(applicablePromotions);
      // Remove expired promotions
      let finalPromotions = removeExpiredPromotions(validPromotions);
      // Analyze and rank popular destinations
      let popularDestinations = analyzeAndRankDestinations(flightPopularityData);
      return { finalPromotions, popularDestinations };
  }
```

## 7. Functional Requirements

### Use Cases
**Use Case 1**:
  - **Title**: Flight Search
  - **Description**: Allow the user to search for flights by providing origin, destination, and travel dates, with options to filter and sort results, and compare different flights.

  - **Actors**: 
    - Primary Actor: Passenger / User
    - Secondary Actors: Flight Database, External API

  - **Preconditions**:
    - User is presented with a list of available flights based on the search criteria.

  - **Postconditions**: 
    - User is presented with a list of available flights based on the search criteria.

  - **Main Flow**: 
    1. User navigates to the flight search page.
    2. User enters the departure city, destination city, departure date, return date (if applicable), and number of passengers.
    3. User applies filters (e.g., airline, price range, duration).
    4. System validates the input and queries the flight database or external API.
    5. System displays the list of available flights.
    6. User selects flights for comparison.
    7. System displays a side-by-side comparison of the selected flights.

  - **Alternate Flows**: 
    - **Invalid Input**
      - System displays an error message prompting the user to correct the input.

    - **No Available Flights**
      - System displays a message indicating no flights are available for the given criteria.

**Use Case 2**:
  - **Title**: Authentication
  - **Description**: Allow the user to create an account and securely log in to access the system.
  - **Actors**: 
    - Primary Actor: Passenger / User
    - Secondary Actors: Authentication Server, Database
  - **Preconditions**:
    - User has accessed the registration or login page.
  - **Postconditions**: 
    - User is successfully registered or logged in and granted access to the system.
  - **Main Flow**: 
    1. User navigates to the registration or login page.   
    2. If a new user, they fill out the registration form and submit it.
    3. System validates the input and stores the data securely.   
    4. If an existing user, they enter their credentials and submit the login form.   
    5. System verifies the credentials against the stored data.   
    6. Upon successful authentication, the user is granted access to their dashboard.
  - **Alternate Flows**: 
    - **Invalid Credentials**
      - System displays an error message prompting the user to re-enter their credentials.
    - **Forgot Password**
      - User clicks "Forgot Password" and receives a link via email to reset their password.

**Use Case 3**:
  - **Title**: Booking and Payment Processing
  - **Description**: Enable the user to book flights, process payments securely, and receive booking confirmation.
  - **Actors**: 
    - Primary Actor: Passenger / User
    - Secondary Actors: Payment Gateway, Booking Database

  - **Preconditions**:
    - User has selected a flight to book.

  - **Postconditions**: 
    - User successfully books the flight and receives a confirmation.

  - **Main Flow**: 
    1. User selects a flight and proceeds to booking.   
    2. User enters personal details and payment information.
    3. System processes the payment through the payment gateway.   
    4. Upon successful payment, system stores the booking details in the database.  
    5. System generates a booking confirmation.   
    6. User receives the booking confirmation.

  - **Alternate Flows**: 
    - **Payment Failure**
      - System displays an error message and prompts the user to retry with different payment details.


**Use Case 4**:
  - **Title**: Flight Search Results and Details
  - **Description**: Display flight results after a user searches, with detailed information on flight options, including price and booking summary before finalizing booking.
  - **Actors**: 
    - Primary Actor: Passenger / User
    - Secondary Actors: Flight Database, External API

  - **Preconditions**:
    - User has performed a flight search.

  - **Postconditions**: 
    - User is presented with detailed flight options and booking summary.

  - **Main Flow**: 
    1. User performs a flight search.  
    2. System fetches search results from the flight database or external API.
    3. System retrieves detailed information on each flight option.   
    4. System displays the list of matching flights with detailed information, including price. 
    5. User selects a flight to book.  
    6. System generates a booking summary.

  - **Alternate Flows**: 
    - **No Available Flights**
      - System displays a message indicating no flights are available for the given criteria.
    - **Missing Pricing Data**
      - System handles missing or incorrect pricing data and displays an error message.

**Use Case 5**:
  - **Title**: Download/Print Ticket and Itinerary Details
  - **Description**: Allow the user to download or print tickets and view itinerary details, including upcoming flights.
  - **Actors**: 
    - Primary Actor: Passenger / User
    - Secondary Actors: Booking Database, Ticket Generation Service

  - **Preconditions**:
    - User has a confirmed booking.

  - **Postconditions**: 
    - User successfully downloads or prints the ticket and views itinerary details.

  - **Main Flow**: 
    1. User navigates to the booking details page. 
    2. User selects the option to download or print the ticket.
    3. System generates a PDF/e-ticket.  
    4. User downloads or prints the ticket.  
    5. User views itinerary details, including upcoming flights.  
 
  - **Alternate Flows**: 
    - **Missing Ticket Data***
      - System handles missing ticket data and displays an error message.

**Use Case 6**:
  - **Title**: Promotions, Offers, and Popular Destinations
  - **Description**: Display discounts, special deals, and offers based on user preferences, and show trending flight routes and destinations.
  - **Actors**: 
    - Primary Actor: Passenger / User
    - Secondary Actors: Promotions Database, Flight Popularity Data Source

  - **Preconditions**:
    - User has accessed the promotions or popular destinations page.

  - **Postconditions**: 
    - User is presented with applicable promotions and popular destinations.

  - **Main Flow**: 
    1. User navigates to the promotions or popular destinations page.  
    2. System fetches applicable promotions based on user preferences.
    3. System applies discount rules and removes expired promotions. 
    4. System displays valid promotions to the user.  
    5. System analyzes and ranks popular destinations.   
    6. System displays the list of popular flights and destinations.

  - **Alternate Flows**: 
    - **No Promotions Available**
      - System displays a message indicating no promotions are available.
    - **Data Unavailable**
      - System displays default popular destinations if data is unavailable.


### System Features

**Feature 1: Flight Search**
  - **Description:** Allows users to search for flights by providing origin, destination, and travel dates, with options to filter and sort results, and compare different flights.
  - **Priority:** High
  - **Inputs:** Departure city, destination city, departure date, return date (if applicable), number of passengers, filters (airline, price range, duration), selected flights for comparison
  - **Processing:** Validates input, queries flight database, applies filters, sorts results, displays side-by-side comparison
  - **Outputs:** List of available flights, comparison table
  - **Error Handling:** Display messages for invalid inputs or no available flights, ensure proper filter application, handle incomplete comparisons

**Feature 2: User Authentication (Login/Logout)**
  - **Description:** Secure login/logout functionality to access user-specific details and manage user profiles.
  - **Priority:** High
  - **Inputs:** Email/username, password
  - **Processing:** Validate credentials, authenticate user, manage user profile details
  - **Outputs:** Successful login session or error message, profile dashboard
  - **Error Handling:** Incorrect credentials, forgot password option

**Feature 3: Booking and Payment Processing**
  - **Description:** Enables users to book flights, process payments securely, and receive booking confirmation.
  - **Priority:** High
  - **Inputs:** User booking details, payment details (card number, CVV, expiration)
  - **Processing:** Store booking, generate confirmation, process payment through a secure gateway
  - **Outputs:** Confirmation message, payment success/failure notification
  - **Error Handling:** Handle payment or booking failures, handle invalid payments securely

**Feature 4: Flight Search Results and Details** 
  - **Description:** Displays flight results after a user searches, with detailed information on flight options, including price and booking summary before finalizing booking.
  - **Priority:** High
  - **Inputs:** Search query from flight search feature, selected flight details
  - **Processing:** Fetch and filter available flights, retrieve and display price and details, fetch and format booking summary
  - **Outputs:** List of matching flights, flight details including fare, booking summary display
  - **Error Handling:** Handle cases of no available flights, handle missing or incorrect pricing data, validate all details before proceeding

**Feature 5: Download/Print Ticket and Itinerary Details**
  - **Description:** Allows users to download or print tickets and view itinerary details, including upcoming flights.
  - **Priority:** High
  - **Inputs:** Booking reference, user bookings
  - **Processing:** Generate PDF/e-ticket, fetch and format itinerary, fetch upcoming flights
  - **Outputs:** Downloadable or printable ticket, display itinerary, display upcoming trips
  - **Error Handling:** Handle missing ticket data, handle missing or incorrect details, handle cases of no upcoming flights

**Feature 6: Promotions, Offers, and Popular Destinations**
  - **Description:** Displays discounts, special deals, and offers based on user preferences, and shows trending flight routes and destinations.
  - **Priority:** Medium
  - **Inputs:** User preferences, promotional campaigns, flight popularity data
  - **Processing:** Fetch and apply discount rules, remove expired promotions, analyze and rank destinations
  - **Outputs:** Display available offers, list of popular flights
  - **Error Handling:** Ensure expired promotions are removed, display default popular destinations if data is unavailable


## 8. Non-Functional Requirements
- **Performance**: Describe performance requirements.
- **Security**: Outline security needs.
- **Usability**: Detail user interface and experience considerations.
- **Reliability**: Define reliability and availability requirements.
- **Supportability**: Specify maintenance and support requirements.

## 9. Data Requirements
- **Data Models**:
- **User**
  - userId (Primary Key)
  - firstName
  - lastName
  - email
  - password
  - mobileNumber
  - dateOfBirth
  - bookingHistory
  - address

- **Passenger**
  - passengerId(Primary Key)
  - userId(Foreign Key)
  - firstName
  - lastName
  - email
  - mobileNumber
  - baggageDetails
  - otherDetails
  - passengerType

- **Booking**
  - bookingId(Primary Key)
  - userId(Foreign Key)
  - flightId(Foreign Key)
  - passengerCount
  - bookingDate
  - flightType
  - totalPrice

- **Flight**
  - flightId(Primary Key)
  - airlineId(Foreign Key)
  - fromLocation
  - toLocation
  - departureDate
  - arrivalDate
  - seatsAvailable
  - price

- **Ticket**
  - ticketId(Primary Key)
  - bookingId(Foreign Key)
  - passengerId(Foreign Key)
  - seatNumber
  - ticketStatus
  - issueDate
  - ticketNumber

- **Payments**
  - paymentId(Primary Key)
  - bookingId(Foreign Key)
  - amount
  - paymentDate
  - paymentMethod
  - paymentStatus

- **Airline**
  - airlineId(Primary Key)
  - name
  - email
  - contactNumber

- **Database Requirements**:
  - User Collection (Stores user information and booking history)
  - Passenger Collection (Stores passenger details linked to a user)
  - Booking Collection (Stores booking details linked to a user and a flight)
  - Flight Collection (Stores flight information)
  - Ticket Collection (Stores ticket information for passengers)
  - Payments Collection (Stores payment details related to a booking)
  - Airline Collection (Stores airline company details)

- **Relationships:**

  - User → Booking (One-to-Many): One user can have multiple bookings.
  - Booking → Flight (Many-to-One): Many bookings can belong to a single flight.
  - Booking → Payment (One-to-One): Each booking has one payment record.
  - Airline → Flight (One-to-Many): One airline operates multiple flights.
  - Flight → Booking (One-to-Many): A flight can have multiple bookings.
  - User → Passenger (One-to-Many): A user can register multiple passengers.
  - Passenger → Ticket (One-to-One): Each ticket is assigned to a single passenger.
  - Booking → Ticket (One-to-Many): A booking can include multiple tickets for passengers.

- **Data Storage and Retrieval**: 
- **Data Retrieval Methods**
  - **Fetching a User’s Booking History**
    - { "userId": ObjectId("USER_ID") }
    - Perform a lookup to join with the `Booking` collection to retrieve detailed information.

  - **Retrieving Flight Details for a Specific Booking**
    - { "bookingId": ObjectId("BOOKING_ID") }
    - Use an aggregation pipeline to fetch the associated `flightId` details from the Flight collection.

  - **Fetching Passenger Information for a Booking**
    - { "bookingId": ObjectId("BOOKING_ID") }
    - Join with the `Ticket` collection and fetch associated `passengerId` data.

  - **Retrieving Payment Details for a Booking**
    - { "bookingId": ObjectId("BOOKING_ID") }
    - Directly fetch payment details using `bookingId` as a reference.

  - **Indexing for Performance Optimization**
    - Index on `email` for quick user lookups.
    - Compound index on `{flightId, departureDate}` for fast flight searches.
    - Index `bookingId` in `Payments` and `Tickets` for optimized queries.

  - This MongoDB schema ensures an efficient and scalable design while maintaining data integrity.
- **ERD**: https://app.diagrams.net/#G1v0GvuCPxpL7d9ioGvPHoyO4MvZZXl_TJ#%7B%22pageId%22%3A%22mNDo0j1P8SEVuHjTTdoJ%22%7D

## 10. External Interface Requirements
- **User Interfaces**: Provide sketches or descriptions of the user interface.
- **API Interfaces**: Briefly describe any APIs.
- **Hardware Interfaces**: Mention any required hardware interactions.
- **Software Interfaces**: Note any software interactions.

## 11. Glossary
- **Airline Booking System**: A web-based platform that allows users to search, compare, and book airline tickets.
- **Itinerary**: A document containing flight details, including departure/arrival times, layovers, and seat assignments.
- **Payment Gateway**: A secured service that processes online payments for booking tickets.
- **Cloud-Based Deployment**: Hosting the application on cloud servers for scalability and availability.
- **Flight Search Filters**: Options such as price range, duration, stops, and airlines to refine search results.
- **User Authentication**: The process of verifying a user’s identity through login credentials.
- **E-Ticket**: A digital version of a flight ticket sent to the user via email.

## 12. Appendices
- **Supporting Information**: Add any additional information here.
- **Revision History**: 
  - 20 Feb 2025:   
        - Added a template and partial content for the TSD

  - 24 Feb 2025:   
        - Added Visual Mockup Reference

  - 27 Feb 2025:   
        - Added the Functional Requirements and Data Requirements

  - 28 Feb 2025:   
        - Added Features and System Features

  - 08 Mar 2025:   
        - Revision with the Techinical Specifications Document narrowing the features down to 6 key features for the Airline Booking System.   
        - Revisions with layout and designs in Figma

  - 10 Mar 2025:   
        - Revision with the front-end images.   
        - Revisions with layout and designs in Figma


  - 17 Mar 2025:   
        - Final revision for Login, Navbar and footer designs.
