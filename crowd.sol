pragma solidity >=0.4.22 <0.6.0;

contract ProjectGenerator {
    Project[] public Projects;
    
    function createProject(uint deadline, string memory description, uint projectGoal) public {
        Project newProject = new Project(msg.sender, deadline, description, projectGoal);
        Projects.push(newProject);
    }
    
    function AllProjects() public view returns (Project[] memory) {
        return Projects;
    }
}

contract Project {
    
    struct Request {
        string description;
        uint value;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    enum State {
        Fundraising,
        Expired,
        Successful
    }
    
    
    string public description;
    address payable public creator;
    address[] public contributors;
    bool[] public contributorsvote;
    Request[] public requests;
    uint requestapprovedcount;
    uint requestrejectedcount;
    uint warning;
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
    
    constructor (address payable manager, uint duration, string memory descript, uint goal) public {
        creator = manager;
        startTime = now;
        deadline = now + (duration * 1 days);
        description = descript;
        projectGoal = goal;
        moneyRaised = 0;
        contributorsCount = 0;
        
    }
    
    function support () inState(State.Fundraising) payable public{
        require(msg.sender != creator);
        contributors.push(msg.sender);
        contributions[msg.sender] = contributions[msg.sender] + (msg.value);
        moneyRaised = moneyRaised + (msg.value);
        contributorsCount++;
        FundingCompleteOrExpired();
        //creator.transfer(msg.value);
    }
    
    function FundingCompleteOrExpired() public
    {
        if (now > deadline) 
        {
            if (moneyRaised >= projectGoal)
            {
                state = State.Successful;
                //vendorAllotment();
            }
            else
            {
                state = State.Expired;
            }
            //checkGoalStatus();
        }
    }

    function requestFunds(uint requireFundAmount, string memory  reason) public 
    {
    
        Request memory newRequest = Request({
           description: reason,
           value: requireFundAmount,
           complete: false,
           approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
            //
            bool check=false;
            for (uint i=0; i<contributors.length; i++) {
            if (contributors[i] == msg.sender) {
                check=true;
            }
        }
            // 
        require(check == true);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    
    function callFinalizeRequest(uint index) public
    {
        if(now > deadline)
        finalizeRequest(index);
    }
    
    function finalizeRequest(uint index) private  {
        Request storage request = requests[index];
        require(!request.complete);
        if(request.approvalCount >= contributorsCount/2){
            if(request.approvalCount >= contributorsCount/2 + contributorsCount/4){
                // approved
                requestapprovedcount++;
                creator.transfer(request.value);
                request.complete = true;
            }
            else{
                //approve but warning
                requestapprovedcount++;
                warning++;
                creator.transfer(request.value);
                request.complete = true;
            }
        }
        else{
            //rejected
            requestrejectedcount++;
        }
    }
}
