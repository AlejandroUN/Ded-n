import sys
import mysql.connector
from math import floor
from datetime import datetime

userId = int(sys.argv[1])

dbCredentials = {'user' : 'root',
                 'password' : 'admin',
                 'database' : 'dedun',
                 'host' : 'localhost'}

deleteMatches = 'DELETE FROM Asociaciones WHERE idSegundoAsociado = %s'
retrievePersonalityProfiles = 'SELECT * FROM BigFiveResultados'
insertMatches = 'INSERT INTO Asociaciones VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)'

def opennessAffinityScore(opennessScore, otherOpennessScore):
    classifier = [[3, 3, 2, 1, 0, 0, 0, 0, 0, 0],
                  [3, 3, 3, 2, 1, 1, 0, 0, 0, 0],
                  [2, 3, 3, 3, 2, 1, 1, 0, 0, 0],
                  [2, 2, 3, 3, 3, 2, 1, 1, 0, 0],
                  [1, 1, 2, 3, 3, 3, 2, 1, 1, 0],
                  [0, 1, 1, 2, 3, 3, 3, 2, 2, 1],
                  [0, 0, 1, 1, 2, 3, 3, 3, 2, 2],
                  [0, 0, 0, 1, 1, 2, 3, 3, 3, 2],
                  [0, 0, 0, 0, 1, 1, 2, 3, 3, 3],
                  [0, 0, 0, 0, 0, 0, 1, 2, 3, 3]]
    
    return classifier[floor(opennessScore * 10)][floor(otherOpennessScore * 10)]

def conscientiousnessAffinityScore(conscientiousnessScore, otherConscientiousnessScore):
    classifier = [[3, 3, 2, 1, 0, 0, 0, 0, 0, 0],
                  [3, 3, 3, 2, 1, 1, 0, 0, 0, 0],
                  [2, 3, 3, 3, 2, 1, 1, 0, 0, 0],
                  [2, 2, 3, 3, 3, 2, 1, 1, 0, 0],
                  [1, 1, 2, 3, 3, 3, 2, 1, 1, 0],
                  [0, 1, 1, 2, 3, 3, 3, 2, 2, 1],
                  [0, 0, 1, 1, 2, 3, 3, 3, 2, 2],
                  [0, 0, 0, 1, 1, 2, 3, 3, 3, 2],
                  [0, 0, 0, 0, 1, 1, 2, 3, 3, 3],
                  [0, 0, 0, 0, 0, 0, 1, 2, 3, 3]]
    
    return classifier[floor(conscientiousnessScore * 10)][floor(otherConscientiousnessScore * 10)]

def extraversionAffinityScore(extraversionScore, otherExtraversionScore):
    classifier = [[3, 3, 3, 2, 2, 2, 1, 1, 0, 0],
                  [3, 3, 3, 3, 2, 2, 2, 1, 1, 0],
                  [3, 3, 3, 3, 3, 2, 2, 2, 1, 1],
                  [2, 3, 3, 3, 3, 3, 2, 2, 2, 1],
                  [2, 2, 3, 3, 3, 3, 3, 2, 2, 2],
                  [2, 2, 2, 3, 3, 3, 3, 3, 2, 2],
                  [1, 2, 2, 2, 3, 3, 3, 3, 3, 2],
                  [1, 1, 2, 2, 2, 3, 3, 3, 3, 3],
                  [0, 1, 1, 2, 2, 2, 3, 3, 3, 3],
                  [0, 0, 1, 1, 2, 2, 2, 3, 3, 3]]
    
    return classifier[floor(extraversionScore * 10)][floor(otherExtraversionScore * 10)]

def agreeablenessAffinityScore(agreeablenessScore, otherAgreeablenessScore):
    classifier = [[3, 3, 2, 2, 1, 1, 1, 0, 0, 0],
                  [3, 3, 3, 2, 2, 1, 1, 1, 0, 0],
                  [2, 3, 3, 3, 2, 2, 1, 1, 1, 0],
                  [2, 2, 3, 3, 3, 2, 2, 1, 1, 1],
                  [1, 2, 2, 3, 3, 3, 2, 2, 1, 1],
                  [1, 1, 2, 2, 3, 3, 3, 2, 2, 1],
                  [1, 1, 1, 2, 2, 3, 3, 3, 2, 2],
                  [0, 1, 1, 1, 2, 2, 3, 3, 3, 2],
                  [0, 0, 1, 1, 1, 2, 2, 3, 3, 3],
                  [0, 0, 0, 1, 1, 1, 2, 2, 3, 3]]
    
    return classifier[floor(agreeablenessScore * 10)][floor(otherAgreeablenessScore * 10)]

def neuroticismAffinityScore(neuroticismScore, otherNeuroticismScore):
    classifier = [[0, 1, 3, 2, 1, 1, 0, 0, 0, 0],
                  [1, 1, 2, 3, 2, 1, 1, 0, 0, 0],
                  [3, 2, 2, 2, 3, 2, 1, 1, 0, 0],
                  [2, 3, 2, 2, 2, 3, 2, 1, 1, 0],
                  [1, 2, 3, 2, 2, 2, 3, 2, 1, 1],
                  [1, 1, 2, 3, 2, 2, 2, 3, 2, 1],
                  [0, 1, 1, 2, 3, 2, 2, 2, 3, 2],
                  [0, 0, 1, 1, 2, 3, 2, 2, 2, 3],
                  [0, 0, 0, 1, 1, 2, 3, 2, 1, 1],
                  [0, 0, 0, 0, 1, 1, 2, 3, 1, 0]]
    
    return classifier[floor(neuroticismScore * 10)][floor(otherNeuroticismScore * 10)]

def affinityScores(personalityFactors, otherPersonalityFactors):
    
    return opennessAffinityScore(personalityFactors[0], otherPersonalityFactors[0]), \
           conscientiousnessAffinityScore(personalityFactors[1], otherPersonalityFactors[1]), \
           extraversionAffinityScore(personalityFactors[2], otherPersonalityFactors[2]), \
           agreeablenessAffinityScore(personalityFactors[3], otherPersonalityFactors[3]), \
           neuroticismAffinityScore(personalityFactors[4], otherPersonalityFactors[4])
           

# -

dbConnection = mysql.connector.connect(**dbCredentials)

cursor = dbConnection.cursor()

# - procedure starts here

cursor.execute(deleteMatches, (userId,))

cursor.execute(retrievePersonalityProfiles)

personalityProfiles = [row[:-2] for row in cursor.fetchall()]

for index in range(len(personalityProfiles)):
    if personalityProfiles[index][0] == userId:
        userPersonalityProfile = personalityProfiles[index]
        break
del personalityProfiles[index]

relativeAffinities = list()
for personalityProfile in personalityProfiles:
    relativeAffinities.append((personalityProfile[0],) + affinityScores(userPersonalityProfile[2:],
                                                                        personalityProfile[2:]))
relativeAffinities = sorted(relativeAffinities,
                            key=lambda relativeAffinity : -sum(relativeAffinity[2:]))

for relativeAffinity in relativeAffinities[:6]:
    cursor.execute(insertMatches, relativeAffinity + (userId, datetime.now(), datetime.now()))

# - procedure ends here

cursor.close()

dbConnection.commit()
dbConnection.close()