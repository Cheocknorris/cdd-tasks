  
class MaxHeap {
    constructor(items) {
      this.items = items;
    }
  
    heapify() {
      for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
        this.maxHeapify(i);
      }
    }
  
    maxHeapify(index) {
      let parentIndex = index;
      let leftChildIndex = this.getLeftChildIndex(parentIndex);
      let rightChildIndex = this.getRightChildIndex(parentIndex);
  
      let largestItemIndex = parentIndex;
      if (this.items[leftChildIndex] > this.items[parentIndex]) {
        largestItemIndex = leftChildIndex;
      }
  
      if (this.items[rightChildIndex] > this.items[largestItemIndex]) {
        largestItemIndex = rightChildIndex;
      }
  
      if (largestItemIndex !== parentIndex) {
        this.swap(largestItemIndex, parentIndex);
        this.maxHeapify(largestItemIndex);
      }
    }
  
    swap(largestItemIndex, parentIndex) {
      let temp = this.items[largestItemIndex];
      this.items[largestItemIndex] = this.items[parentIndex];
      this.items[parentIndex] = temp;
    }
  
    getLeftChildIndex(parentIndex) {
      return Math.floor(2 * parentIndex + 1);
    }
  
    getRightChildIndex(parentIndex) {
      return Math.floor(2 * parentIndex + 2);
    }
  }
  
  let maxHeap = new MaxHeap([1, 2, 3, 4, 5, 6, 7, 8]);
  console.log('Before Heapify: ' + JSON.stringify(maxHeap.items));
  maxHeap.heapify();
  console.log('After Heapify: ' + JSON.stringify(maxHeap.items));