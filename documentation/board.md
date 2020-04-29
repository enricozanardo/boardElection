# Board Election

## 1. Environment

Define the common parameters:

ECC of type Secp256k1:

    y^2 = x^3 + 7
    
    P(x1, y1);
    Q(x2, y2);
    
![ECC](curve.jpg)
    
     
## 2. Ticket Generator
Define the number of tickets [1...N]

Compute N operation on the ECC to generate the N tickets :

    P + Q = -R => R  [Ticket 1]
    P + R = -E => E  [Ticket 2]
    P + E = -F => F  [Ticket 3]
    ...              [Ticket N]

## 3. Select the Leader

Starting for the hash of the last block that is written into the Blockchain do the following steps:

    1. Starting hash: 4ceb86317d0d4dac6853663589ef02ccb67134cee75bb886a4410b7aedd0e109

    2. Split the hash in 4 parts:
    Part 1: 4ceb86317d0d4dac
    Part 2: 6853663589ef02cc
    Part 3: b67134cee75bb886
    Part 4: a4410b7aedd0e109
    
    3. Transform each part into binary
    Binary Part 1:  0100110011101011100001100011000101111101000011010100110110101100
    Binary Part 2:  0110100001010011011001100011010110001001111011110000001011001100
    Binary Part 3:  1011011001110001001101001100111011100111010110111011100010000110
    Binary Part 4:  1010010001000001000010110111101011101101110100001110000100001001
    
    4. Compute the XOR between [part 1 - part 2] and [part 3 = part 4]
    Partial Result 1: 0010010010111000111000000000010011110100111000100100111101100000
    Partial Result 2: 0001001000110000001111111011010000001010100010110101100110001111
   
    5. Compute the XOR between [partial resutl 1 and partial result 2]
    Final Result    : 0001001000110000001111111011010000001010100010110101100110001111
   
    6. Transform the Binary number into a decimal number and compute the modulo N function
    Winner (Leader): 680
    
Ticket n. 680 is the Leader of the Election. 

## 4. Board Members

We could have several approaches to define the board members. For instance we could run the functions described into point 3 in a deterministic way (like splitting the hash in different parts) or more easily starting from the Leader ticket simple count another m (number of board members) consecutive tickets (ex. 681, 682, ... m-1, m).
The fact that they are consecutive tickets do not matter because they are representing points that are far away one to each other.

## Is the Board Election a pseudorandom generator?

In order to proof the tickets exctraction is an event uniformly distributed, we made some experiments by simulating the Board Election. In particular, it was choose to perform three independent experiments in which each simulated extraction is performed a number of 1000 times, such that for each simulation a total of 3000 tickets is obtained. We performed three such simulation for a total of nine experiments. For each of these experiments we exctract the number of times the same ticket has been extracted, in order to build an histogram. For all histograms, on the x axis there are the number of the tickets extracted, while on the y axis there are the number of times the same ticket has been extracted. In the first simulation, the maximum number of times the same ticket was extracted is six, and this event happened only for the experiment 3. The same number was exctracted five times only in the experiment two, while the same number was extracted four time in all three experiment, four times in both experiment 2 and 3, three times in experiment 1. The others histograms follow more or less the same trend.

![board_hist_1](board_hist_1.png)
![plot_from_API_4](plot_from_API_4.png)
![plot_form_API_3](plot_from_API_3.png)

For greater clarity, we plot also the Comulative Density Function (CDF) of the tickets. As expected, it shows a linear trend, with a really narrow error.
![CDF_Board_Election](CDF_Board_Election.png)

Finally, the CDF of the counts is showed. Over the 80% of tickets have been chosen a maximum of two consecutive times. 

![cdf_count](cdf_count.png)

