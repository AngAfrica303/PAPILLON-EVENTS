-- Papillon Events database schema
-- This script creates tables for incoming bookings and customer inquiries.

CREATE TABLE bookings (
    id INT IDENTITY(1,1) PRIMARY KEY,
    full_name NVARCHAR(150) NOT NULL,
    phone_number NVARCHAR(30) NOT NULL,
    email NVARCHAR(150) NULL,
    event_date DATE NOT NULL,
    event_location NVARCHAR(200) NOT NULL,
    event_type NVARCHAR(100) NOT NULL,
    inquiry_message NVARCHAR(MAX) NOT NULL,
    created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
    status NVARCHAR(50) NOT NULL DEFAULT 'new'
);

CREATE TABLE inquiries (
    id INT IDENTITY(1,1) PRIMARY KEY,
    full_name NVARCHAR(150) NOT NULL,
    phone_number NVARCHAR(30) NOT NULL,
    email NVARCHAR(150) NULL,
    event_date DATE NULL,
    event_location NVARCHAR(200) NULL,
    event_type NVARCHAR(100) NULL,
    inquiry_message NVARCHAR(MAX) NOT NULL,
    created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
    status NVARCHAR(50) NOT NULL DEFAULT 'new'
);

-- Optional index for easier query filtering
CREATE INDEX IX_bookings_event_date ON bookings (event_date);
CREATE INDEX IX_inquiries_event_date ON inquiries (event_date);
