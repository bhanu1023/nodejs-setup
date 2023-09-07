-- insert 100 seats for train 1


INSERT INTO Seat (seatNumber, seatStatus, trainid) VALUES ('A1', 'Available',1);
INSERT INTO Seat (seatNumber, seatStatus, trainid) VALUES ('A2', 'Available',1);
INSERT INTO Seat (seatNumber, seatStatus, trainid) VALUES ('A3', 'Available',1);
INSERT INTO Seat (seatNumber, seatStatus, trainid) VALUES ('A4', 'Available',1);
INSERT INTO Seat (seatNumber, seatStatus, trainid) VALUES ('A5', 'Available',1);

update Train set Seats=5 where id=1;

select * from Train;