// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "hardhat/console.sol";
 
 contract NftMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itmesSold;

    uint256 listingPrice = 2000000 wei;

    address payable owner;
    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem{
      uint256 tokenId;
      address payable seller;
      address payable owner;
      uint256 price;
      bool sold;
    }
    event idMarketItemCreated(
      uint256 indexed tokenId,
      address  seller,
      address  owner,
      uint256 price,
      bool sold
    );
        event TokenResell(
        uint256 indexed tokenId,
        address seller,
        uint256 price
    );

    event MarketSaleCompleted(
        uint256 indexed tokenId,
        address buyer,
        uint256 price
    );
    modifier onlyOwner{
      require(msg.sender == owner,"Only onwer has asscess to this");
      _;
    }
constructor() ERC721("NFT CROWDFUNDING","CFUNDNFT"){
   owner = payable(msg.sender); 
}
 function updateListingPrice(uint256 _listingPrice) public payable onlyOwner  {
listingPrice =_listingPrice;
}
function getListingPrice() public view returns(uint256){
   return listingPrice;
}
//NFT creation stsrts here
function createToken(string memory tokenURI,uint256 price) public payable returns(uint256)
{
   _tokenIds.increment();
   uint256 newTokenId =_tokenIds.current();
   _mint(msg.sender ,newTokenId);
   _setTokenURI(newTokenId, tokenURI);
   //own funtion not from openzep
   createMarketItem(newTokenId,price);
   return newTokenId;
}
//Create MarketItems
function createMarketItem(uint256 tokenId,uint256 price) private {
   require(price > 0 ,"Price must be atleast 1");
   require(msg.value <listingPrice,"Price atleast above listing price");
   idMarketItem[tokenId] =MarketItem(
      tokenId,
      payable(msg.sender),
      payable(address(this)),
      price,
      false

   );
   _transfer(msg.sender, address(this), tokenId);
emit idMarketItemCreated(tokenId, msg.sender, address(this), price, false);}
//resell
function resellToken(uint256 tokenId,uint256 price) public payable{
   require(idMarketItem[tokenId].owner==msg.sender,"Only owner have the rights to this");
   require(msg.value<listingPrice,"Must be more than Listing Price");
   idMarketItem[tokenId].sold =false;
   idMarketItem[tokenId].price=price;
   idMarketItem[tokenId].seller=payable(msg.sender);
   idMarketItem[tokenId].owner=payable(address(this));
   _itmesSold.decrement();
   _transfer(msg.sender, address(this), tokenId);
}
//create market sale

function createMarketSale(uint256 tokenId) public payable{
   uint256 price =idMarketItem[tokenId].price;
   require(
      msg.value ==price,"please ensure it is asking price to comple the order"
   );
   idMarketItem[tokenId].owner =payable(msg.sender);
   idMarketItem[tokenId].sold =true;
   _itmesSold.increment();
   _transfer(address(this), msg.sender, tokenId);
   payable(owner).transfer(listingPrice);
   payable(idMarketItem[tokenId].seller).transfer(msg.value);
           emit MarketSaleCompleted(tokenId, msg.sender, price);

}
//Getting UNSOLD NFT DATA

function fetchMarketItem() public view returns(MarketItem[] memory)
{
   uint256 itemCount = _tokenIds.current();
   uint256 unSoldItemCount =_tokenIds.current()
   - _itmesSold.current();
uint256 currentIndex =0;
MarketItem[] memory items =new MarketItem[](unSoldItemCount);
for (uint256 i =0;i<itemCount;i++){
   if(idMarketItem[i+1].owner== address(this)){
      uint256 currentId =i+1;
      MarketItem storage currentItem =idMarketItem[currentId];
      items[currentIndex] =currentItem;
      currentIndex +=1;

   }
}
return items;
}
function fetchcount() public view returns(uint256)
{
   uint256 itemCount = _tokenIds.current();
   
return itemCount;
}


//PURCHASE ITEM
function fetchMyNFT() public view returns(MarketItem[] memory){
   uint256 totalCount=_tokenIds.current();
   uint256 itemCount =0;
   uint256 currentIndex =0;
   for(uint256 i=0 ;i<totalCount;i++){
      if(idMarketItem[i+1].owner == msg.sender){
         itemCount+=1;

      }

   }
   MarketItem[] memory items =new MarketItem[](itemCount);
   for(uint256 i=0 ;i<totalCount;i++){
      if(idMarketItem[i+1].owner ==msg.sender){
      uint256 currntId =i+1;
      MarketItem storage currentItem =idMarketItem[currntId];
      items[currentIndex]= currentItem;
      currentIndex+=1;
      }
   }
   return items;
}


//SINGULE USER ITEMS
function fetchItemsListed() public view returns (MarketItem[] memory){
uint256 totalCount =_tokenIds.current();
uint256 itemCount =0;
uint256 currentIndex=0;
   for(uint256 i=0 ;i<totalCount;i++){
if(idMarketItem[i+1].seller ==msg.sender){
   itemCount +=1;

}
}
MarketItem[] memory items =new MarketItem[](itemCount);
for(uint256 i =0;i<totalCount;i++){
   if(idMarketItem[i+1].seller == msg.sender){
      uint256 currentId =i+1;
      MarketItem storage currentItem =idMarketItem[currentId];
      items[currentIndex] =currentItem;
      currentIndex+=1;
   }
}
return items;
 
 }
 }