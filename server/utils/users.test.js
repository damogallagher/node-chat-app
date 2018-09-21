const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id: 2,
            name: 'Jen',
            room: 'React Course'
        },
        {
            id: 3,
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        }; 

        var responseUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);

    });

    it('should remove a user', () => {
        var userId = users.users[0].id;
        var responseUser = users.removeUser(userId);
        expect(responseUser.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var responseUser = users.removeUser(users.users[0].id + 'dfds');
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = users.users[0].id;
        var responseUser = users.getUser(userId);
        expect(responseUser).toBeTruthy();
        expect(responseUser.id).toBe(users.users[0].id);
        expect(responseUser.name).toBe(users.users[0].name);
        expect(responseUser.room).toBe(users.users[0].room);
    });

    it('should not find user', () => {
        var userId = users.users[0].id + 'fds';
        var responseUser = users.getUser(userId);
        expect(responseUser).toBeFalsy(); 
    });

    it('should return names for node course', () => {
        var userList = users.getUserList(users.users[0].room);
        expect(userList).toEqual([users.users[0].name, users.users[2].name]);
    });  
    
    it('should return names for react course', () => {
        var userList = users.getUserList(users.users[1].room);
        expect(userList).toEqual([users.users[1].name]);
    });   
})