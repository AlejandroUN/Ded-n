import sys
import mysql.connector
from datetime import datetime

userEmail = [sys.argv[1]]
userId = [int(sys.argv[2])]

dbCredentials = {'user' : 'root',
                 'password' : 'admin',
                 'database' : 'dedun',
                 'host' : 'localhost'}
retrieveAnswers = 'SELECT * FROM BancoDeRespuestasBFs WHERE email = %s'
insertFactorsOfPersonality = 'INSERT INTO BigFiveResultados VALUES (%s, %s, %s, %s, ' + \
                                                                   '%s, %s, %s, %s, ' + \
                                                                   '%s)'
groupsOfAnswers = [[0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
                   [1, 6, 11, 16, 21, 26, 31, 36, 41, 46],
                   [2, 7, 12, 17, 22, 27, 32, 37, 42, 47],
                   [3, 8, 13, 18, 23, 28, 33, 38, 43, 48],
                   [4, 9, 14, 19, 24, 29, 34, 39, 44, 49]]

dbConnection = mysql.connector.connect(**dbCredentials)

cursor = dbConnection.cursor()
cursor.execute(retrieveAnswers, userEmail)
answers = cursor.fetchall()[0][:-4]
factorsOfPersonality = [sum(answers[i] for i in groupsOfAnswers[j]) / 50 for j in range(5)]
insertionValues = userId + userEmail + factorsOfPersonality + 2 * [datetime.now()]
cursor.execute(insertFactorsOfPersonality, insertionValues)

print('Success')

cursor.close()

dbConnection.commit()
dbConnection.close()