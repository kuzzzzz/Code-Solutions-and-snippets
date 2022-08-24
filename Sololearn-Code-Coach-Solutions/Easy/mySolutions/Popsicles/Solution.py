siblings = int(input())
popsicles = int(input())


def togive(sib, pop):
    if pop % sib == 0:
        
        print('give away')
        return 'give away'
    else:
        print('eat them yourself')
        return 'eat them yourself'



togive(siblings, popsicles)
