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
- **Link or Screenshot**: https://www.figma.com/design/lOiGafupfytA7AWHaIiGZJ/MCP-Side-Project-(Airline-Booking-System))?node-id=73-2&p=f&t=RQkXxGR3tNBh7vLW-0

## 6. Features
- **Feature 1**: Description
- **Feature 2**: Description
- **Feature 3**: Description
- (Add more features as necessary)

## 7. Functional Requirements
### Use Cases
- **Use Case 1**:
  - **Title**: 
  - **Description**: 
  - **Actors**: 
  - **Preconditions**: 
  - **Postconditions**: 
  - **Main Flow**: 
  - **Alternate Flows**: 

### System Features
- **Feature 1**:
  - **Description**: 
  - **Priority**: 
  - **Inputs**: 
  - **Processing**: 
  - **Outputs**: 
  - **Error Handling**: 

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
- **Term 1**: Definition
- **Term 2**: Definition

## 12. Appendices
- **Supporting Information**: Add any additional information here.
- **Revision History**: Record any changes made to the document with dates and descriptions.


