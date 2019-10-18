pragma solidity ^0.4.19;

contract ProjectGenerator {
    address[] public Projects;
    
    function createProject(uint dur) public {
        address newProject = new Project(msg.sender, dur);
        Projects.push(newProject);
    }
    
    function AllProjects() public view returns (address[]) {
        return Projects;
    }
}

contract Project {
    
    enum State {
        Fundraising,
        Expired,
        Successful
    }
    
    
    string public description;
    address public creator;
    address[] public contributors;
    uint public contributorsCount;
    uint public projectGoal;
    uint public startTime;
    uint public deadline;
    uint public moneyRaised;
    
    mapping (address => uint) public contributions;
    
    State public state = State.Fundraising;
    
    modifier inState(State _state) {
        require(state == _state);
        _;
    }
    
    constructor (address manager, uint duration) public {
        creator = manager;
        startTime = now;
        deadline = now + (duration * 1 days);
    }
    
    function support () inState(State.Fundraising) payable public{
        require(msg.sender != creator);
        contributors.push(msg.sender);
        contributions[msg.sender] = contributions[msg.sender] + (msg.value);
        moneyRaised = moneyRaised + (msg.value);
        contributorsCount++;
        FundingCompleteOrExpired();
    }
    
    function FundingCompleteOrExpired() public
    {
        if (moneyRaised >= projectGoal)
        {
            state = State.Successful;
            creator.transfer(moneyRaised);
            moneyRaised = 0;
            //payOut();
        }
        else if (now > deadline) 
        {
            state = State.Expired;
        }
        
    }
}

