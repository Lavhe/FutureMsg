using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.Support.V4.App;

namespace FutureMsg.Views.adapter
{
    class MainTabAdapter : FragmentPagerAdapter
    {
        public MainTabAdapter(FragmentManager fm) : base(fm){

        }

        public override int Count
        {
            get
            {
                return 2;
            }
        }
        
        public override Android.Support.V4.App.Fragment GetItem(int position)
        {
            switch (position)
            {
                case 0:
                    // Top Rated fragment activity
                    return new MsgsFragment();
                case 1:
                    // Games fragment activity
                    return new PendingFragment();
            }
            return null;
        }
    }
}