  
class MinHeap {
    constructor(items) {
      this.items = items;
    }
  
    heapify() {
      for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
        this.minHeapify(i);
      }
    }
  
    minHeapify(index) {
      let parentIndex = index;
      let leftChildIndex = this.getLeftChildIndex(parentIndex);
      let rightChildIndex = this.getRightChildIndex(parentIndex);
  
      let lowestItemIndex = parentIndex;
      if (this.items[leftChildIndex] < this.items[parentIndex]) {
        lowestItemIndex = leftChildIndex;
      }
  
      if (this.items[rightChildIndex] < this.items[lowestItemIndex]) {
        lowestItemIndex = rightChildIndex;
      }
  
      if (lowestItemIndex !== parentIndex) {
        this.swap(lowestItemIndex, parentIndex);
        this.minHeapify(lowestItemIndex);
      }
    }
  
    swap(lowestItemIndex, parentIndex) {
      let temp = this.items[lowestItemIndex];
      this.items[lowestItemIndex] = this.items[parentIndex];
      this.items[parentIndex] = temp;
    }
  
    getLeftChildIndex(parentIndex) {
      return Math.floor(2 * parentIndex + 1);
    }
  
    getRightChildIndex(parentIndex) {
      return Math.floor(2 * parentIndex + 2);
    }
  }
  
  let minHeap = new MinHeap([8, 7, 6, 5, 4, 3, 2, 1]);
  console.log('Before Heapify: ' + JSON.stringify(minHeap.items));
  minHeap.heapify();
  console.log('After Heapify: ' + JSON.stringify(minHeap.items));