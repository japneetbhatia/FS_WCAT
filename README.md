# FS_WCAT -> FILE SYSTEM - WRITING CAT COMMAND
Making CAT function software

**WCAT** : Writing linux cat command for file handling.

## To enable wcat command in run following in terminal
`npm init`     
`npm install`

## Command Executed :- 
**1. To read a file** 
`wcat filename`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command1.JPG)   


**2. To read multiple files**
`wcat filename1 filename2 filename3`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command2.JPG)


**3. To read file without getting blank lines**
`wcat -s filename`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command3.JPG)


**4. To read file with numbering before each lines**
`wcat -n filename`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command4.JPG)


**5. To read file with numbering and on only non-empty lines** 
`wcat -n -s filename`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command5.JPG)


**6. To read file with numbering only on non-empty lines**
`wcat -b filename`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command6.JPG)


**7. To write from one file to another (overwrite)**
`wcat filename1 -w filename2`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command9.JPG)


**8. To append from one file to another**
`wcat filename1 -a filename2`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command10.JPG)


**9. To write only non-empty lines from one file to another**
`wcat -s filename1 -w filename2`

![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command11.JPG)


## if two options are given together preference is given to first.
![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command7.JPG)


![command](https://github.com/japneetbhatia/FS_WCAT/blob/main/images/command8.JPG)

