CREATE TABLE dim_time (
                sk_time INT IDENTITY NOT NULL,
                date DATE NOT NULL,
                CONSTRAINT dim_time_sk PRIMARY KEY (sk_time)
)