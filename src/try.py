import pickle

def Write():
    f=open("Employee.dat","wb")
    while True:
        eno = int(input("Enter emp no."))
        name = input("Enter emp name")
        salary = int(input("Enter emp salary"))
        data = [eno,name,salary]
        pickle.dump(data,f)
    f.close()

def Read():
    f=open("Employee.dat","rb")
    try:
        while True:
            data = pickle.load(f)
            print(data)
    except:
        f.close()

def Search():
    f=open("Emplyee.dat","rb")
    data = pickle.load(f)
    for i in data:
        print(i)
    f.close()