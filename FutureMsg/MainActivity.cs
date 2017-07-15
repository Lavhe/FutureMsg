using Android.App;
using Android.Widget;
using Android.OS;
using Android.Support.V4.App;
using Android.Support.V4.View;
using System;
using FutureMsg.Views.adapter;

namespace FutureMsg
{
    [Activity(Label = "FutureMsg", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : FragmentActivity
    {
        private ViewPager viewPager;
        private MainTabAdapter mAdapter;
        private ActionBar actionBar;
        // Tab titles
        private string[] tabs = { "Msgs", "Pending" };

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);

            // Initilization
            viewPager = (ViewPager)FindViewById(Resource.Layout.Main);
            actionBar = ActionBar;
            mAdapter = new MainTabAdapter(SupportFragmentManager);

            viewPager.Adapter = mAdapter;
            actionBar.SetHomeButtonEnabled(false);
            actionBar.NavigationMode = ActionBarNavigationMode.Tabs;

            // Adding Tabs
            foreach (var tab_name in tabs)
            {
                var tab = actionBar.NewTab();
                tab.SetText(tab_name);

                tab.TabSelected += (object sender, ActionBar.TabEventArgs e) =>
                {
                    actionBar.SetSelectedNavigationItem(tab.Position);
                };

                tab.TabReselected += (object sender, ActionBar.TabEventArgs e) =>
                {
                    viewPager.CurrentItem = tab.Position;
                };
                                
                actionBar.AddTab(tab);
            }

            viewPager.PageSelected += (object sender, ViewPager.PageSelectedEventArgs e)=> {
                actionBar.SetSelectedNavigationItem(e.Position);
            };
        }
        
    }
}



