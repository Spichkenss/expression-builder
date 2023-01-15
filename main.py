def node(i, sgn, number, value, string, query, expected, queryLen):
    if (i == queryLen):
        value += sgn * number
        if (expected == value):
            print(string)
    else:
        node(i + 1, sgn, 10 * number + int(query[i]), value, string + query[i], query, expected, queryLen)
        node(i + 1,   1, int(query[i]), value + sgn * number, string + '+' + query[i], query, expected, queryLen)
        node(i + 1,  -1, int(query[i]), value + sgn * number, string + '-' + query[i], query, expected, queryLen)

def doTheThing(S, N):
    node(1, 1, int(S[0]), 0, S[0], S, N, len(S))
    
print("Started")
doTheThing("9876543210", 200)
print("Done")