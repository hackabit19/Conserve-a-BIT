pragma solidity ^0.5.12;

contract ProjectGenerator {
    Project[] public Projects;
    
    function createProject(uint dur) public {
        Project newProject = new Project(msg.sender, dur);
        Projects.push(newProject);
    }
    
    function AllProjects() public view returns (Project[] memory) {
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
    address payable public creator;
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
    
    constructor (address payable manager, uint duration) public {
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
        }
        else if (now > deadline) 
        {
            state = State.Expired;
        }
        
    }
}